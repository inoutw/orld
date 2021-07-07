const axios = require('axios')

const http = axios.create({
  timeout: 30000,
})

http.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.params = config.params ? config.params : {}
    config.params.__t = new Date().getTime()
  }
  if (config.url.startsWith('/api')) {
		config.baseURL = 'http://feature.csmp.qihoo.net:5050/'
		config.headers.common.Authorization = 'Bearer 360'
  }
  config.withCredentials = false
  return config
})

http.interceptors.response.use(
  (response) => {
    // msg is Token过期了
    if (response.data.code === 401) {
      return response
    }
    if (response.data.code !== 200 && response.config.responseType !== 'blob') {
      // 返回blob类型时，没有code字段

      return Promise.reject(response.data.msg)
    }
    return response.data
  },
  (_) => {
    return Promise.reject('连接服务器失败')
  },
)

module.exports = http