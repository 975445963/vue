import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import './permission'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.prototype.$store = store
Vue.config.productionTip = false

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
