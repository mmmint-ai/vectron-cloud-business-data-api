<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="transactions"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <template v-slot:item.total="{ item }">
        {{ `${item.total} ${item.currency}` }}
      </template>
      <template v-slot:item.transactionAt="{ item }">
        {{ new Date(item.transactionAt).toLocaleString() }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import store from '../../store'

export default {
  setup() {
    return {
      headers: [
        { text: '#', value: 'invoiceNumber' },
        { text: 'Date', value: 'transactionAt' },
        { text: 'Total', value: 'total' },
      ],

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
  computed: {
    transactions: () => store.state.transactions,
  },
}
</script>
