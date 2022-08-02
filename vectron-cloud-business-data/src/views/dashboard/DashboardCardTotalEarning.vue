<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Total Earning</span>
      <v-spacer></v-spacer>

      <v-btn icon small class="me-n3 mt-n2">
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="my-7">
      <div class="d-flex align-center">
        <h1 class="text-4xl font-weight-semibold">{{ totalProfit }} EUR</h1>
      </div>
    </v-card-text>

    <v-card-text>
      <div
        v-for="(group, index) in profitByMainGroup"
        :key="group.mainGroupId"
        :class="`d-flex align-start ${index > 0 ? 'mt-8' : ''}`"
      >
        <div class="d-flex align-center flex-grow-1 flex-wrap">
          <div>
            <h4 class="font-weight-medium">
              {{ group.name }}
            </h4>
            <span class="text-xs text-no-wrap">{{ group.mainGroupId }}</span>
          </div>

          <v-spacer></v-spacer>

          <div class="ms-1">
            <p class="text--primary font-weight-medium mb-1">{{ group.total }} </p>
            <v-progress-linear :value="Number(group.total) / Number(totalProfit) * 100"></v-progress-linear>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiMenuUp } from '@mdi/js'
import store from '../../store'

export default {
  setup() {
    return {
      icons: { mdiDotsVertical, mdiMenuUp },
    }
  },
  computed: {
    totalProfit: () => {
      return store.getters.getTotal.toString()
    },
    profitByMainGroup: () => {
      return store.getters.profitByMainGroup.sort((a,b) => (a.total < b.total) ? 1 : ((b.total < a.total) ? -1 : 0));
    },
  },
}
</script>
