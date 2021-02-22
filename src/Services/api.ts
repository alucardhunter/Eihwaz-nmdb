import axios from 'axios'
import { toast } from 'react-toastify'

const Api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API
})

axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`

Api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  if (error[0] === 401) {
    toast.error('Seu token expirou, você será redirecionado!')
    setTimeout(() => {
      window.location.href = '/login'
    }, 3200)
    console.log(error[1])
  }
  return Promise.reject(error[1])
})

export default Api
