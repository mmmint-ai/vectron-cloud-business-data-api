<template>
  <v-card flat class="pa-3 mt-2">
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col md="6" cols="12">
            <v-text-field v-model="accountDataLocale.username" label="Username" dense outlined></v-text-field>
          </v-col>

          <v-col md="6" cols="12">
            <v-text-field v-model="accountDataLocale.name" label="Name" dense outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.email" label="E-mail" dense outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.role" dense label="Role" outlined></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-select v-model="accountDataLocale.status" dense outlined label="Status" :items="status"></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="accountDataLocale.company" dense outlined label="Company"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" class="me-3 mt-4">
              Save changes
            </v-btn>
            <v-btn color="secondary" outlined class="mt-4" type="reset" @click.prevent="resetForm">
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const status = ['Active', 'Inactive', 'Pending', 'Closed']

    const accountDataLocale = ref(JSON.parse(JSON.stringify(props.accountData)))

    const resetForm = () => {
      accountDataLocale.value = JSON.parse(JSON.stringify(props.accountData))
    }

    return {
      status,
      accountDataLocale,
      resetForm,
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>
