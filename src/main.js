// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './font_884916_tdkiemvtlw/iconfont.css'
import Heads from './components/header/heads'
import Scroll from './components/header/scrolls'
Vue.component(Heads.name,Heads)
Vue.component(Scroll.name,Scroll)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preload:1.3,
  loading: '../static/one.gif'
})
//生产环境下的提示是关闭的，开发环境下的提示是开启的。
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//0
  store,
  components: { App },
  template: '<App/>'
})
