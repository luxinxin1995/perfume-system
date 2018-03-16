import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:3000', // api的base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true
})
const ajaxGet = async function (url) {
  try {
    const res = await service(
      {
        url,
        method: 'get'
      }
    )
    return res
  } catch (e) {
    console.log('e', e)
  }
}
const ajaxPost = async function (url, data) {
  try {
    const res = await service(
      {
        url,
        method: 'post',
        data
      }
    )
    return res
  } catch (e) {
    console.log('e', e)
  }
}
export { ajaxGet, ajaxPost }
