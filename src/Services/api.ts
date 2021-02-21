import axios from 'axios'
import { toast } from 'react-toastify'

const Api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_API
})

Api.defaults.headers.common.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2M2ZjA1OTIyMzkxZjQ4ZjA1YjMwMWQ0MDNmYTFjZSIsInN1YiI6IjYwMjg0NjA3YjAyZjVlMDAzZmRmMTRmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-w-3j6zlCje7us_aM2xMFlnxNA7ftpIUSUS6Hh-XkOc'

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
