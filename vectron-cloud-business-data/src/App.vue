<template>
  <layout-content>
    <router-view></router-view>
  </layout-content>
</template>

<script>
import LayoutContent from '@/layouts/Content.vue'

export default {
  components: {
    LayoutContent,
  },
  setup() {},
}
</script>
