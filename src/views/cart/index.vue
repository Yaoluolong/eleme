<template>
  <div class="cart">
    <div class="cart-wrap">
      <item-card :wrap-visible="false" />
    </div>
    <footer>
      <div>...</div>
      <div>...</div>
    </footer>
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import ItemCard from '@/components/ItemCard'

export default {
  name: 'Cart',
  components: { ItemCard },
  mixins: [adaptiveScreen],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.cart {
  .cart-wrap {
  }
  footer {
    position: fixed;
    bottom: 50px;
    width: 100%;
    height: 50px;
    background: $theme-color;
  }
}
</style>
