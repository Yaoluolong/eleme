<template>
  <div class="menu">
    <van-toast id="van-toast" />
    <van-search
      v-model="searchValue"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @click="clickSearch"
    />
    <div class="menu-siderbar" :style="siderbar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item,index) in sidebarItems"
          :key="index"
          :title="item.sortName"
          @click="onSwitch(item)"
        />
      </van-sidebar>
    </div>
    <div class="menu-itemList" :style="itemList">
      <item-card v-for="(item,index) in menuItems" :key="index" :item="item" :title="item.sortName" />
    </div>
    <div style="clear:both" />
  </div>
</template>

<script>
import { adaptiveScreen } from '@/mixins/adaptiveScreen'
import { getMenuList, getSortList } from '@/api/menu'
import ItemCard from '@/components/ItemCard'
import { Toast } from 'vant'

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
        {
          commodityId: 'null',
          commodityName: null,
          describe: null,
          orderNumber: null,
          commodityMoney: null,
          number: 0
        }
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
    console.log(this.$route)
    this.siderbar.height = this.getScreenHeight - 104 + 'px'
    this.itemList.width = this.getScreenWeight - 85 + 'px'
    this.itemList.height = this.getScreenHeight - 104 + 'px'

    getSortList()
      .then(response => {
        const { data } = response
        this.sidebarItems = data.list
        this.onSwitch(data.list[0])
      })
      .catch(error => {
        Toast.fail('加载失败:' + error)
      })
  },
  methods: {
    clickSearch() {
      console.log(this.getScreenHeight)
      console.log(this.getScreenWeight)
    },
    onSwitch(item) {
      const { sortId } = item
      getMenuList({ sortId })
        .then(response => {
          const { data } = response
          this.menuItems = data.list
        })
        .catch(error => {
          Toast.fail('加载失败,' + error)
        })
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
