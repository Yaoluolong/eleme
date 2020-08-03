<template>
  <div>
    <!-- <top-bar  /> -->
    <app-main />
    <tab-bar />
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
    return {}
  },
  computed: {
    getCurrentRoute() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
