<template>
  <div class="item-card">
    <div class="item-card-image">
      <van-image width="100" height="100">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div class="item-card-content">
      <div class="item-card-header">标题</div>
      <div class="item-card-wrap">
        <div>描述</div>
        <div>月销售量</div>
      </div>
      <div class="item-card-footer">
        <div class="item-card-price">
          ￥
          <span>价格</span>
        </div>
        <div class="item-card-button">
          <van-button
            v-show="number!==0"
            icon="arrow-left"
            size="mini"
            color="#42b983"
            round
            plain
            @click="reduceNumber"
          />
          <span v-show="number!==0" style="margin:0 3px 0 3px">{{ number }}</span>
          <van-button icon="arrow" size="mini" color="#42b983" round @click="addNumber" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  components: {},
  props: {
    wrapVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      number: 0
    }
  },
  methods: {
    reduceNumber() {
      this.number--
    },
    addNumber() {
      this.number++
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  overflow: hidden;
  width: 100%;
  display: flex;
  .item-card-image {
    margin: 10px;
  }
  .item-card-content {
    margin: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item-card-header {
      font-weight: 600;
      font-size: 18px;
    }
    .item-card-wrap {
      font-size: 14px;
      color: #999999;
    }
    .item-card-footer {
      display: flex;
      justify-content: space-between;
      .item-card-price {
        font-weight: 600;
        color: #ff6034;
        span {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
