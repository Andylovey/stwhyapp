<template>
  <div style="height:100%;">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">

    <div slot="drawer">
      <!-- 菜单内容 -->
      <group title="侧滑导航栏" style="margin:20px 0;">
          <cell title="首页" link="/" @click.native="drawerVisibility = false">
          </cell>
          <cell title="麦迪" link="/maidi/message" @click.native="drawerVisibility = false">
          </cell>
          <cell title="科比" link="/kebi" @click.native="drawerVisibility = false">
          </cell>
      </group>
    </div>

    <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">

        <x-header
          v-if="isShowNav"
          slot="header"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          title="App">
          <span v-if="Rpath == '/' || Rpath.indexOf('/maidi') > -1 || Rpath == '/kebi'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span>
        </x-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <!-- <transition :name="direction">
          <router-view class="appView"></router-view>
        </transition> -->
        <transition>
          <router-view></router-view>
        </transition>
      </view-box>

    <!-- rourer-view 作为默认插槽内容 -->
    <!-- <div>
      <router-view></router-view>
    </div> -->

    </drawer>
  </div>
</template>

<script>
import { Drawer , Group , Cell , XHeader , ViewBox } from 'vux'
export default {
  name: 'App',
  components : {
    Drawer,
    Group,
    Cell,
    XHeader,
    ViewBox
  },
  data() {
    return {
      drawerVisibility : false,
      entryUrl: document.location.href,
      Rpath : this.$store.getters.getRpath,
      direction: "slide-right"
    }
  },
  methods : {
    isShowNav () {
      if (this.entryUrl.indexOf('hide-nav') > -1) {
        return false
      }
      return true
    },
    // leftOptions () {
    //   return {
    //     showBack: this.route.path !== '/'
    //   }
    // },
    // rightOptions () {
    //   return {
    //     showMore: true
    //   }
    // },
  },
  watch : {
    $route : {
      handler : function (to,from) {
        this.$store.dispatch('useChangeRpath',to.path)
        this.Rpath = this.$store.getters.getRpath;


        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        // if (to.path == "/") {
        //   this.direction = "slide-right";
        // } else if (from.path == "/") {
        //   this.direction = "slide-left";
        // }else{
          this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
        // }
      }
    }
  }
}
</script>

<style>
.appView {
  position: absolute;
  width:100%;
  transition: all 0.1s;
}
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter {
  transform: translate(-50%, 0);
}
.slide-right-leave-active{
  transform: translate(100%, 0);
}
</style>
