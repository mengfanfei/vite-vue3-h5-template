// 安卓状态栏高度
export function setStatusHeight(value) {
  return localStorage.setItem('statusHeight', value)
}

export function getStatusHeight() {
  return localStorage.getItem('statusHeight')
}

export function removeStatusHeight() {
  return localStorage.removeItem('statusHeight')
}

export function setOnlyTag(value) {
  return localStorage.setItem('only_tag', value)
}

export function getOnlyTag() {
  return localStorage.getItem('only_tag')
}

