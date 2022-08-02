<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs v-model="tab" show-arrows>
      <v-tab v-for="tab in tabs" :key="tab.icon">
        <v-icon size="20" class="me-3">
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <account-settings-account :account-data="accountSettingData.account" v-on:save="save"></account-settings-account>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import store from '../../../store'

import { mdiAccountOutline, mdiLockOpenOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

// demos
import AccountSettingsAccount from './AccountSettingsAccount.vue'
import AccountSettingsSecurity from './AccountSettingsSecurity.vue'

export default {
  components: {
    AccountSettingsAccount,
    AccountSettingsSecurity,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Account', icon: mdiAccountOutline }
    ]

    // account settings data
    const accountSettingData = {
      account: {
        username: store.state.username,
        password: store.state.password,
        siteId: store.state.siteId,
        apiKey: store.state.apiKey,
        authKey: store.state.authKey
      },
    }

    const save = (data) => {
      store.commit('username', data.username)
      store.commit('password', data.password)
      store.commit('siteId', data.siteId)
      store.commit('apiKey', data.apiKey)
      store.commit('authKey', data.authKey)
    }

    return {
      save,
      tab,
      tabs,
      accountSettingData,
      icons: {
        mdiAccountOutline,
        mdiLockOpenOutline,
      },
    }
  },
}
</script>
