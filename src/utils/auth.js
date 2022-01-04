const tokenKey = 'myappToken'

export function getToken() {
  return localStorage.getItem(tokenKey)
}

export function setToken(token) {
  return localStorage.setItem(tokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(tokenKey)
}