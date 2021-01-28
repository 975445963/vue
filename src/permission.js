import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  // 初次进入页面设置令牌
  if (to.query.token) {
    localStorage.setItem('token', to.query.token)
  }
  if (to.query.coNum && to.query.ordQtySum && to.query.ordAmtSum) {
    store.state.orderInfo.coNum = to.query.coNum
    store.state.orderInfo.ordQtySum = to.query.ordQtySum
    store.state.orderInfo.ordAmtSum = to.query.ordAmtSum
    store.state.orderInfo.orgCode = to.query.orgCode
    console.log(store.state)
  }
  if (to.query.orgCode) {
    store.state.orgCode = to.query.orgCode
  }
  next()
})

router.afterEach((to, from) => {
  console.log(to)
  // 进入页面后设置标题
  if (to.meta.title) {
    document.title = to.meta.title
    store.commit('setTitle', to.meta.title)
  }
})
