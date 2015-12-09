import {API_ENDPOINT} from 'constants/api_enpoint'
import request from 'superagent'
import Cookie from 'cookies-js'

export default function(action, options = {}) {
  return new Promise((resolve, reject) => {
    request
      .post(API_ENDPOINT)
      .send({
        post: action,
        query: JSON.stringify(options.data),
        pipe: JSON.stringify(options.pipe),
        authenticity_token: Cookie.get('_csrf_token')
      })
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
