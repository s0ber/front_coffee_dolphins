import {ENDPOINT} from 'constants/enpoints'
import request from 'superagent'
import Cookie from 'cookies-js'

export default function(path, data = {}) {
  data = Object.assign({}, data, {authenticity_token: Cookie.get('_csrf_token')})

  return new Promise((resolve, reject) => {
    request
      .post(ENDPOINT + path)
      .send(data)
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
