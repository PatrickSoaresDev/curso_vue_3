import axios from 'axios'
import authService from './auth'

const API_ENVS = {
  localhost: 'http://localhost:3000'
}

const httpClient = axios.create({ baseURL: API_ENVS.localhost })

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500
    if (canThrowAnError) {
      throw new Error(error.message)
    }
    return error
  }
)

export default {
  auth: authService(httpClient)
}
