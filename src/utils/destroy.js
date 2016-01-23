import {ENDPOINT} from 'constants/enpoints'
import request from 'superagent'
import Cookie from 'cookies-js'

export default function(path) {
  return new Promise((resolve, reject) => {
    request
      .del(ENDPOINT + path)
      .send({authenticity_token: Cookie.get('_csrf_token')})
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
