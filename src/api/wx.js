import request from "../utils/request";

/**
 * 获取微信config
 * @param data 参数
 * @returns
 */
export async function getwxConfigInfo(data) {
  return request({
    url: '/members/wechat_jsconfig',
    data,
    method: 'post'
  })
}