import './Uploader.sass'
import React, {Component} from 'react'

export class Uploader extends Component {
  render() {
    return (
      <div className='Uploader'>
        <div className='Uploader-button Uploader-dropArea'>
          <span className='Uploader-buttonInner'>
            <span className='Uploader-buttonContent'>
              <span className='Uploader-buttonTitle'>
                Перетащите картинку сюда, чтобы загрузить ее на сервер.
              </span>
            </span>
          </span>
        </div>

        <div className='Uploader-button Uploader-dropButton'>
          <span className='Uploader-buttonInner'>
            <span className='Uploader-buttonContent'>
              <span className='Uploader-buttonTitle'>
                Перетащите картинку сюда, чтобы загрузить ее на сервер.
              </span>
            </span>
          </span>
          <input type='file' name='file' />
        </div>
      </div>
    )
  }
}
