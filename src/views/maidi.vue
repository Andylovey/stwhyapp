<template>
    <div>
        <!-- <div>
            <img class="previewer-demo-img" v-for="(item, index) in list" :key="index" :src="item.src" width="100" @click="show(index)">
            <div v-transfer-dom>
                <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
            </div>
        </div>


        <router-link to="/juesha">绝杀</router-link> -->



        <tabbar>
          <tabbar-item selected link="/maidi/message">
            <img slot="icon" src="../assets/demo/icon_nav_msg.png">
            <span slot="label">Message</span>
          </tabbar-item>
          <tabbar-item link="/maidi/wechat">
            <img slot="icon" src="../assets/demo/icon_nav_button.png">
            <span slot="label">Wechat</span>
          </tabbar-item>
          <tabbar-item link="/maidi/news">
            <img slot="icon" src="../assets/demo/icon_nav_cell.png">
            <span slot="label">News</span>
          </tabbar-item>
        </tabbar>
        <keep-alive include="maidi,message,wechat,news">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import { Previewer, TransferDom , Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name : 'maidi',
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    }
  },
  data () {
    return {
      list: [{
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        w: 800,
        h: 400
      },
      {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
        w: 1200,
        h: 900
      }, {
        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
      }],
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
