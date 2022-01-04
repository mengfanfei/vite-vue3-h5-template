import axios from 'axios'
import { getToken } from './auth'
import { Toast } from 'vant'
import app from './jsBridge'
import { browser } from "./browser";
import { getOnlyTag } from "./utils";
import wx from 'weixin-js-sdk'

const service = axios.create({
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// request 拦截器
service.interceptors.request.use(config => {
  if (!config.data) {
    config['data'] = {}
  }
  if (getToken()) { // 增加token
    config.headers['token'] = getToken() // app需要，写死
    config.data['token'] = getToken() // app需要，写死
  }
  if (getOnlyTag()) { // app需要，写死
    config.data['appInfo'] = { only_tag: localStorage.getItem("only_tag") }
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === 501) { // 未登录，跳转登录
      if (browser.versions.mini) { // 小程序 跳到小程序登录页
        wx.miniProgram.redirectTo({
          url: '/pages/login/login?type=h5',
        })
      } else {
        Toast.fail('请先登录!')
        app.login()
      }
      return Promise.reject(response.data)
    } else if (response.status === 200 && response.data.code === 200) {
      return response.data
    } else {
      Toast.clear()
      Toast(response.data.msg || '未知错误')
      return Promise.reject(response.data)
    }
  },
  error => {
    Toast.clear()
    return Promise.reject(error)
  }
)

export default service