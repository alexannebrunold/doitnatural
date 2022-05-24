import axios from 'axios'
import { Success } from 'kekka'

import { getCookie } from '../utils/cookie-handler'
import { adaptHttpError } from './errors/error-adapter'

export default class HttpService {
  constructor ({ apiUrl, headers }) {
    this.apiUrl = apiUrl
    this.headers = headers
  }

//   get customerToken () {
//     return getCookie({ name: 'customer_token' })
//   }

  get ({ path }) {
    const headers = this.headers

    if (this.customerToken) {
      headers.Authorization = `Bearer ${this.customerToken}`
    }

    return axios
      .get(path, {
        baseURL: this.apiUrl,
        headers: this.headers,
      })
      .then((result) => {
        return Success(result.data)
      })
      .catch((error) => {
        throw adaptHttpError(error)
      })
  }

  post ({ path, body }) {
    const headers = this.headers

    if (this.customerToken) {
      headers.Authorization = `Bearer ${this.customerToken}`
    }

    return axios
      .post(path, body, {
        baseURL: this.apiUrl,
        headers: this.headers,
      })
      .then((result) => {
        return Success(result.data)
      })
      .catch((error) => {
        throw adaptHttpError(error)
      })
  }
}
