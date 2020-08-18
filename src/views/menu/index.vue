<template>
  <div class="menu">
    <van-search
      v-model="searchValue"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @click="clickSearch"
    />
    <div class="menu-siderbar" :style="siderbar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item,index) in sidebarItems" :key="index" :title="item.sortName" />
      </van-sidebar>
    </div>
    <div class="menu-itemList" :style="itemList">
      <item-card />
    </div>
    <div style="clear:both" />
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import ItemCard from '@/components/ItemCard'

export default {
  name: 'Menu',
  components: { ItemCard },
  mixins: [adaptiveScreen],
  data() {
    return {
      /* v-model */
      searchValue: '', // 搜索关键词
      activeKey: 0, // 激活的侧边栏key

      /* v-for */
      sidebarItems: [// 侧边栏item
        {
          sortId: 1,
          sortName: '套餐'
        },
        {
          sortId: 2,
          sortName: '小吃'
        }
      ],
      menuItems: [
        {}
      ],

      /* 样式 */
      siderbar: {
        float: 'left',
        background: '#f7f8fa',
        height: ''
      },
      itemList: {
        height: '',
        width: '',
        float: 'left'
      }
    }
  },
  created() {
    this.siderbar.height = this.getScreenHeight - 104 + 'px'
    this.itemList.width = this.getScreenWeight - 85 + 'px'
    this.itemList.height = this.getScreenHeight - 104 + 'px'
  },
  methods: {
    clickSearch() {
      console.log(this.getScreenHeight)
      console.log(this.getScreenWeight)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
.menu {
  .menu-siderbar,
  .menu-itemlist {
    overflow: auto;
  }
}

/deep/.van-sidebar-item--select {
  font-weight: 600;
}
/deep/.van-sidebar-item--select::before {
  width: 5px;
  height: 61px;
  background-color: $theme-color;
}
</style>
