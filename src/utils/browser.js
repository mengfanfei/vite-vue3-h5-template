export const browser = {
  versions: function() {
    let u = navigator.userAgent
    return {
      /*IE内核*/
      trident: u.indexOf('Trident') > -1,
      /*opera内核*/
      presto: u.indexOf('Presto') > -1,
      /*苹果、谷歌内核*/
      webKit: u.indexOf('AppleWebKit') > -1,
      /*火狐内核*/
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      /*是否为移动终端*/
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      /*ios终端*/
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      /*android终端或者uc浏览器*/
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      /*是否为iPhone或者QQHD浏览器*/
      iPhone: u.indexOf('iPhone') > -1,
      /*是否iPad*/
      iPad: u.indexOf('iPad') > -1,
      /*是否是微信浏览器（微信网页）*/
      weixin: u.toLowerCase().indexOf('micromessenger') > -1,
      /*是否是Safari浏览器*/
      Safari: u.indexOf('Safari') > -1,
      /*是否是微信小程序*/
      mini: /miniProgram/i.test(u),
      /*夸克浏览器*/
      Quark: u.indexOf('Quark') > -1,
    };
  }()
};

// 是否是app
export function isApp() {
  return isIOSApp() || isAndroidApp()
}

// 是否ios app
export function isIOSApp() {
  return browser.versions.ios && !browser.versions.Safari
}
// 是否android app
export function isAndroidApp() {
  let is_android = localStorage.getItem('statusHeight') != null;
  return is_android || (browser.versions.android && !browser.versions.Safari)
}