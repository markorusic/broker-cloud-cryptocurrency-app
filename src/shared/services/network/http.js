import axios from 'axios'
import { BASE_URL } from 'src/config/api'
import EventEmmiter from '../../utils/EventEmmiter'

class HttpClient {
  events = new EventEmmiter()

  client = axios.create({
    baseURL: BASE_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  constructor() {
    this.setResponseInterceptors({
      error: error => {
        const { response } = error
        const { UNAUTHORIZED } = httpEventTypes
        if (response && response.status === UNAUTHORIZED) {
          this.events.emit(UNAUTHORIZED)
        }
        return Promise.reject(error)
      }
    })
  }

  setHeader(header, value) {
    if (value) {
      this.client.defaults.headers[header] = value
    } else {
      delete this.client.defaults.headers[header]
    }
  }

  setResponseInterceptors({
    success = response => response,
    error = (...args) => Promise.reject(...args)
  }) {
    this.client.interceptors.response.use(success, error)
  }

  get = (...args) => this.client.get(...args)
  post = (...args) => this.client.post(...args)
  put = (...args) => this.client.put(...args)
  patch = (...args) => this.client.patch(...args)
  delete = (...args) => this.client.delete(...args)
}

export const httpEventTypes = {
  UNAUTHORIZED: 401
}

export default new HttpClient()
