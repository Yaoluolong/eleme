<template>
  <div>
    <top-bar v-if="topVisible" :title="routeName" />
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
      tabRoutes: ['menu', 'cart', 'order'],
      topRoutes: ['detail', 'settlement']
    }
  },
  computed: {
    tabVisible() {
      const route = this.$route.name
      this.$store.dispatch('cart/getCart')
      if (this.tabRoutes.includes(route)) {
        return true
      } else {
        return false
      }
    },
    topVisible() {
      const route = this.$route.name
      if (this.topRoutes.includes(route)) {
        return true
      } else {
        return false
      }
    },
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
