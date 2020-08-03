<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @click="clickSearch"
    />
    <div :style="siderbar" style="float:left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item,index) in items" :key="index" :title="item.sortName" />
      </van-sidebar>
    </div>
    <div style="float:left">21323</div>
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'

export default {
  name: 'Menu',
  components: {},
  mixins: [adaptiveScreen],
  data() {
    return {
      /* v-model */
      searchValue: '', // 搜索关键词
      activeKey: 0, // 激活的侧边栏key

      /* v-for */
      items: [// 侧边栏item
        {
          sortId: 1,
          sortName: '套餐'
        },
        {
          sortId: 2,
          sortName: '小吃'
        }
      ],

      /* 样式 */
      siderbar: {
        background: '#f7f8fa',
        height: ''
      }
    }
  },
  created() {
    this.siderbar.height = this.getScreenHeight - 104 + 'px'
  },
  methods: {
    clickSearch() {
      console.log(this.getScreenHeight)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
.siderbar {
  background: #f7f8fa;
}
/deep/.van-sidebar-item--select {
  font-weight: 600;
}
/deep/ .van-sidebar-item--select::before {
  width: 5px;
  height: 61px;
  background-color: $theme-color;
}
</style>
