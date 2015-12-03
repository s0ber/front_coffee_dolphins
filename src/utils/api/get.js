import {API_ENDPOINT} from 'constants/api_enpoint'
import request from 'superagent'

export default function(action, options = {}) {
  return new Promise((resolve, reject) => {
    request
      .get(API_ENDPOINT)
      .query({get: action, query: options.query, pipe: options.pipe})
      .withCredentials()
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
  })
}
