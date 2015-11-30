import API_ENDPOINT from 'constants/api_enpoint'
import request from 'superagent'

export default function(action, options = {}) {
  return new Promise((resolve, reject) => {
    request
      .post(API_ENDPOINT)
      .send({query: options.data, pipe: options.pipe})
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
  })
}
