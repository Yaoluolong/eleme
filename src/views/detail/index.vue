<template>
  <div class="detail">
    <div class="detail-header">
      <div class="image">
        <van-image width="100%" height="200px">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
    </div>
    <div class="detail-wrap">
      <div class="title">
        <div class="name">{{ item.commodityName||'名称' }}</div>
        <div class="price">￥{{ item.commodityMoney||'9.00' }}</div>
      </div>
      <van-divider />
      <div class="describe">
        <div class="label">商品类别</div>
        <div class="content">{{ item.sortName||'商品类别' }}</div>
      </div>
      <div class="describe">
        <div class="label">商品描述</div>
        <div class="content">{{ item.describe||'商品描述' }}</div>
      </div>
      <van-divider />
      <div class="describe">
        <div class="label">主要材料</div>
        <div class="content">{{ item.materials||'主要材料' }}</div>
      </div>
    </div>
    <div class="detail-footer" />
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      item: {
        commodityId: null,
        commodityName: null,
        describe: null,
        commodityMoney: null,
        commodityImageUrl: null,
        sortId: null,
        sortName: null,
        materials: null
      }
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.detail {
  .detail-wrap {
    .title,
    .describe {
      margin: 10px 10px;
    }
    .label {
      font-size: 18px;
      font-weight: 600;
      color: $theme-color;
    }
    .content {
      margin: 5px 10px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      color: $theme-color;
      .name,
      .price {
        font-size: 20px;
        font-weight: 600;
      }
      .price {
        color: #ff6034;
      }
    }
  }
}
</style>
