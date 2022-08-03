<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center">
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">Vectron</h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">Welcome to Vectron Cloud! 👋🏻</p>
          <p class="mb-2">Please sign-in to your account and start the adventure</p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="info@vectron.de"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="siteId"
              outlined
              label="SiteId"
              placeholder="123"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="apiKey"
              outlined
              :type="isApiKeyVisible ? 'text' : 'password'"
              label="ApiKey"
              placeholder="············"
              :append-icon="isApiKeyVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isApiKeyVisible = !isApiKeyVisible"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="authKey"
              outlined
              :type="isAuthKeyVisible ? 'text' : 'password'"
              label="AuthKey"
              placeholder="············"
              :append-icon="isAuthKeyVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isAuthKeyVisible = !isAuthKeyVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap"></div>

            <v-btn block color="primary" class="mt-6" @click.prevent="save"> Login </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <!-- tree -->
    <v-img class="auth-tree" width="247" height="185" src="@/assets/images/misc/tree.png"></v-img>

    <!-- tree  -->
    <v-img class="auth-tree-3" width="377" height="289" src="@/assets/images/misc/tree-3.png"></v-img>
  </div>
</template>

<script>
import store from '../../store'
import router from '../../router'

// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isApiKeyVisible = ref(false)
    const isAuthKeyVisible = ref(false)
    const username = ref('')
    const siteId = ref('')
    const apiKey = ref('')
    const authKey = ref('')

    const save = data => {
      store.commit('username', data.username)
      store.commit('siteId', data.siteId)
      store.commit('apiKey', data.apiKey)
      store.commit('authKey', data.authKey)

      router.push('/')
    }

    return {
      isApiKeyVisible,
      isAuthKeyVisible,
      username,
      siteId,
      authKey,
      apiKey,
      save,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
