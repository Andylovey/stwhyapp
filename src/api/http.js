import axios from 'axios'
import Qs from 'qs'

if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://www.testapi.com'
}else if(process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://www.zsapi.com'
}

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export const getMsg = () => {
    return axios.get('/getmsg').then(res => {
        return res.data
    })
}