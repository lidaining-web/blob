import axios from 'utils/axios'
export function sendSysInfo(params) {
  return axios({
    url: '/ldn/sendSysInfo',
    method: 'post',
    data: params
  })
}

export function getList(params) {
  return axios({
    url: '/ldn/article',
    method: 'post',
    data: params
  })
}

export function getArticleById(params) {
  return axios({
    url: '/ldn/getArticleById',
    method: 'post',
    data: params
  })
}