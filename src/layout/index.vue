<template>
  <div>
    <top-bar v-if="topVisible" />
    <app-main />
    <tab-bar v-if="tabVisible" />
  </div>
</template>

<script>
import AppMain from './AppMain'
import TabBar from './TabBar'
import TopBar from './TopBar'

export default {
  name: 'Layout',
  components: {
    AppMain,
    TabBar,
    TopBar
  },
  data() {
    return {
      tabRoutes: ['/menu', '/cart', '/mine'],
      topRoutes: []
    }
  },
  computed: {
    tabVisible() {
      const route = this.$route.path
      if (this.tabRoutes.includes(route)) {
        return true
      } else {
        return false
      }
    },
    topVisible() {
      const route = this.$route.path
      if (this.topRoutes.includes(route)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
