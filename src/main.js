import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store';
import App from './App'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
//import vConsole from 'vconsole'

console.log('test')

fastclick.attach(document.body)
var vm = new Vue({ router, render: h => h(App), store })
vm.$mount('#app')
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})