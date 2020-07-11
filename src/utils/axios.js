import Axios from 'axios';
// import qs from 'qs';
const axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.transformRequest = function (data, headers) { 
//   return qs.stringify(data)
// }
axios.interceptors.request.use((config) => {

  if (config.method === 'post') {
    config.data = JSON.parse(JSON.stringify(config.data))
  }
  console.log(config)
  return config;
});
// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axios;