export default {
  /**
   * @function 打开新的页面
   * @param path 要跳转的路径
   */
  goPage: function (path) {
    location.href = "jsCallBack://?type=push&path=" + path;
  },
  /**
   * @function 返回上一页
   */
  goBack: function () {
    location.href = "jsCallBack://?type=back";
  },
  /**
   * @function 返回app
   */
  goHome: function() {
    location.href = "jsCallBack://?type=home"
  },
  /**
   * @function 请求定位权限
   */
  location: function() {
    location.href = "jsCallBack://?type=location"
  },
  /**
   * @function 调用App登录
   */
  login: function () {
    location.href = "jsCallBack://?type=login";
  },
  /**
   * @function 调用App扫描二维码
   */
  scan: function () {
    location.href = "jsCallBack://?type=scan";
  },
  /**
   * @function 请求通讯录
   */
  addressBook: function() {
    location.href = "jsCallBack://?type=addressBook"
  },
  /**
   * @function 打电话
   * @param phone 电话
   */
  tel: function(phone) {
    location.href = "jsCallBack://?type=tel&phone=" + phone;
  },
  /**
   * @function 调用App分享
   * @param title 分享的标题
   * @param desc  分享的副标题
   * @param logoUrl 分享的图片链接
   * @param shareUrl 分享的跳转链接
   */
  share: function (title, desc, logoUrl, shareUrl) {
    location.href = "jsCallBack://?type=share&title=" + title + "&desc=" + desc + "&logo=" + logoUrl + "&shareUrl=" + shareUrl;
  },
  /**
   * @function 打开App内的某个页面，app任务完成后打开push
   * @param name app的页面   message:消息，share:分享，realName:实名认证，setPayPwd:设置交易密码，changePayPwd:修改交易密码，invoice:发票管理
   * @param push
   */
  openPage: function (name, push) {
    location.href = "jsCallBack://?type=redirect&name=" + name + "&push=" + push;
  },
  /**
   * @function 重定向到App内的某个页面，app任务完成后打开redirect
   * @param name app的页面   message:消息，share:分享，realName:实名认证，setPayPwd:设置交易密码，changePayPwd:修改交易密码，invoice:发票管理
   * @param redirect
   */
  redirectPage: function (name, redirect) {
    location.href = "jsCallBack://?type=redirect&name=" + name + "&redirect=" + redirect;
  },
  /**
   * @function 调用App保存图片到相册
   * @param imgUrl  图片路径
   */
  saveImg: function (img) {
    location.href = "jsCallBack://?type=saveImg&img=" + img;
  },
  /**
   * @function 调用App跳转微信or支付宝支付
   * @param type wx or ali
   * @param data 支付需要的数据
   * @param url 支付成功后重定向地址
   */
  pay: function (type, data, url) {
    location.href = "jsCallBack://?type=" + type + "&data=" + data + "&url=" + url;
  },
  /**
   * @function 带参数返回上一页
   * @param key
   * @param value
   */
  callBackNative: function (key, value) {
    location.href = "jsCallBack://?type=callback&keyName=" + key + "&keyValue=" + value;
  },
  /**
   * @function 返回上一页并刷新为url
   * @param url
   */
  callBackRedirect: function (url) {
    location.href = "jsCallBack://?type=backAndPush&url=" + url;
  },
  /**
   * @function 返回source并打开redirect
   * @param source
   * @param redirect
   */
  // BackPageNative: function (redirect) {
  // 	location.href = "jsCallBack://?type=destory&source=" + source + "&redirect=" + redirect;
  // },
  /**
   * @function 返回source并刷新为redirect
   * @param source
   * @param redirect
   */
  //  BackPageRedirect: function (redirect) {
  // 	location.href = "jsCallBack://?type=refresh&source=" + source + "&redirect=" + redirect;
  // },
}