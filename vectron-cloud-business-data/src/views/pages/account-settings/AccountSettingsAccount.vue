<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountDataLocale.username"
              label="Username"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountDataLocale.password"
              label="Password"
              dense
              outlined
              :append-icon="isApiKeyVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :type="isPasswordVisible ? 'text' : 'password'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountDataLocale.siteId"
              label="SiteId"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountDataLocale.apiKey"
              dense
              label="ApiKey"
              outlined
              :append-icon="isApiKeyVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :type="isApiKeyVisible ? 'text' : 'password'"
              @click:append="isApiKeyVisible = !isApiKeyVisible"
            >
            </v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountDataLocale.authKey"
              dense
              outlined
              label="AuthKey"
              :append-icon="isAuthKeyVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :type="isAuthKeyVisible ? 'text' : 'password'"
              @click:append="isAuthKeyVisible = !isAuthKeyVisible"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-4"
              @click.prevent="saveForm"
            >
              Save changes
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-4"
              type="reset"
              @click.prevent="resetForm"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  mdiAlertOutline, mdiCloudUploadOutline, mdiEyeOffOutline, mdiEyeOutline,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const isPasswordVisible = ref(false)
    const isApiKeyVisible = ref(false)
    const isAuthKeyVisible = ref(false)

    const accountDataLocale = ref(JSON.parse(JSON.stringify(props.accountData)))

    const resetForm = () => {
      accountDataLocale.value = JSON.parse(JSON.stringify(props.accountData))
    }

    const saveForm = function () {
      this.$emit('save', accountDataLocale.value)
    }

    return {
      isPasswordVisible,
      isApiKeyVisible,
      isAuthKeyVisible,
      accountDataLocale,
      resetForm,
      saveForm,
      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
}
</script>
