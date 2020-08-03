<template>
  <div>
    <van-tabbar v-model="active" active-color="#42b983" @change="onChange">
      <van-tabbar-item icon="bars">菜单</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  data() {
    return {
      active: 0
    }
  },
  watch: {
    active() {
      const path = this.$route.path
      let active = 0
      switch (path) {
        case '/menu':
          active = 0
          break
        case '/cart':
          active = 1
          break
        case '/mine':
          active = 2
          break
        default:
          break
      }
      return active
    }
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.$router.push('menu')
          break
        case 1:
          this.$router.push('cart')
          break
        case 2:
          this.$router.push('mine')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
</style>
