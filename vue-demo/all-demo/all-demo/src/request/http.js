import axios from 'axios'
import QS from 'qs'

// 设置请求超时
axios.defaults.timeout = 10000
// post 请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
