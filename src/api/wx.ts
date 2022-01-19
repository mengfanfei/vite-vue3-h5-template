import request from '@/utils/request'

interface WxConfig {
  url: string,
  jsApiList: string[],
  openTagList: string[]
}

/**
 * 获取微信config
 * @param data 参数
 * @returns
 */
export async function getwxConfigInfo(data: WxConfig) {
  return request({
    url: '/members/wechat_jsconfig',
    data,
    method: 'post'
  })
}