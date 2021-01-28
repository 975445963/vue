import axios from 'axios'
// import { Toast } from 'vant'
import Vue from 'vue'
const v = new Vue()
const url = process.env.VUE_APP_API_URL
// 创建axios实例
const service = axios.create({
  baseURL: url,
  timeout: 20000 // 请求超时时间
})
let toast
// request拦截器
service.interceptors.request.use(
  async config => {
    const u = navigator.userAgent
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isiOS) {
      console.log('ios')
    } else {
      console.log('else')
    }
    config.headers.token = localStorage.getItem('token')
    // config.headers.token = 'a1796452-1d0b-4e52-9285-39cf3bba8699'
    // config.headers['auth-userid'] = 'UC0000035977'
    config.headers['ga-appname'] = 'QCY'
    toast = v.$toast.loading({
      duration: 0,
      loadingType: 'spinner',
      message: '加载中'
    })
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    toast && toast.clear()
    return response.data
  },
  error => {
    toast && toast.clear()
    v.$toast(error.response.data.message || error.response.statusText)
    return Promise.reject(error)
  }
)
export default service
