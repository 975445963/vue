import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/page/home'),
    meta: {
      title: '首页',
      backHome: true
    }
  }
]

export const cachedViews = routes
  .filter(item => {
    console.log(item.meta.cache)
    return item.meta && item.meta.cache
  })
  .map(item => item.name)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  },
  routes
})
