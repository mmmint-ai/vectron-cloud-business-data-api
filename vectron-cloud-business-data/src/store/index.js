import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { TransactionApi } from 'vectron-cloud-data-api-proxy'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '',
    password: '',
    siteId: '',
    apiKey: '',
    authKey: '',
    transactions: [],
    mainGroups: new Map(),
    productGroups: new Map(),
    products: new Map(),
    invoices: new Map(),
  },
  mutations: {
    /**
     * Loads from local storage
     *
     * @see https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store/
     * @param {*} state
     */
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))),
        )
      }
    },
    username(state, payload) {
      state.username = payload
    },
    password(state, payload) {
      state.password = payload
    },
    siteId(state, payload) {
      state.siteId = payload
    },
    apiKey(state, payload) {
      state.apiKey = payload
    },
    authKey(state, payload) {
      state.authKey = payload
    },
    transactions(state, payload) {
      state.transactions = payload
    },
    mainGroups(state, payload) {
      state.mainGroups = payload
    },
    productGroups(state, payload) {
      state.productGroups = payload
    },
    products(state, payload) {
      state.products = payload
    },
    invoices(state, payload) {
      state.invoices = payload
    },
  },
  actions: {
    getTransactions(context) {
      const { siteId } = this.state
      const conf = {
        apiKey: this.state.apiKey,
      }
      const headers = []
      headers['X-Authorization-Token'] = this.state.authKey
      const requestConfig = {
        headers,
      }

      const api = new TransactionApi(conf)
      const transactions = api.getTransactionsUsingGET2(siteId, undefined, requestConfig)

      transactions.then(response => {
        const mainGroups = new Map(response.data.flatMap(({ mainGroups }) => mainGroups).map(k => ([k.mainGroupId, k])))
        const productGroups = new Map(response.data.flatMap(({ productGroups }) => productGroups).map(k => ([k.productGroupId, k])))
        const products = new Map(response.data.flatMap(({ products }) => products).map(k => ([k.productId, k])))
        const invoices = new Map(response.data.map(k => ([k.invoiceId, k])))

        context.commit('transactions', response.data)
        context.commit('mainGroups', mainGroups)
        context.commit('productGroups', productGroups)
        context.commit('products', products)
        context.commit('invoices', invoices)
      }).catch(error => {
      })
    },
  },
  getters: {
    getTotal(state) {
      return state.transactions.reduce((total, transaction) => total + transaction.total, 0)
    },
    getCountInvoices(state) {
      return state.transactions.length
    },
    getCountItems(state) {
      return state.transactions.reduce((total, transaction) => total + transaction.items.length, 0)
    },
    profitByMainGroup(state) {
      const groups = store.state.mainGroups
      if (!groups.values) {
        return [{}]
      }

      const values = [...groups.values()].map(group => ({
        mainGroupId: group.mainGroupId,
        name: group.name,
        total: store.state.transactions.reduce((total, transaction) => (
          total
              + transaction.items
                .filter(item => {
                  const groupId = store.state.products.get(item.productId).mainGroupId
                  if (groupId === group.mainGroupId) {
                    return item
                  }
                })
                .reduce((total, item) => total + item.price, 0)
        ), 0),
      }))

      return values
    },
    profitByProductGroup(state) {
      const groups = store.state.productGroups
      if (!groups.values) {
        return [{}]
      }

      const values = [...groups.values()].map(group => ({
        productGroupId: group.productGroupId,
        name: group.name,
        total: store.state.transactions.reduce((total, transaction) => (
          total
              + transaction.items
                .filter(item => {
                  const groupId = store.state.products.get(item.productId).productGroupId
                  if (groupId === group.productGroupId) {
                    return item
                  }
                })
                .reduce((total, item) => total + item.price, 0)
        ), 0),
      }))

      return values
    },
  },
  modules: {},
})

/**
 * Saves into local storage
 *
 * @see https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store/
 */
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
