import wx from 'weixin-js-sdk'
import { getwxConfigInfo } from '../api'

/**
 * 设置微信配置
 */
export function wxConfig() {
  const url = window.location.href.split('#')[0]
  getwxConfigInfo({
    url,
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
    openTagList: ['wx-open-launch-app']
  }).then(res => {
    const { nonceStr, signature, timestamp } = res.data
    wx.config({
      appId: 'wxc32d1bb65f9912fb',
      nonceStr,
      signature,
      timestamp,
      debug: true,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      openTagList: ['wx-open-launch-app']
    })
    wx.ready(_ => {
      console.log('ready')
    })
    wx.error(err => {
      console.log(err)
    })
  })
}

// 分享
export function wxShare(title, desc, link, imgUrl) {
  wx.ready(function() {
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
  })
}