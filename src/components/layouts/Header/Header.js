import './Header.sass'
import React, {Component} from 'react'
import logo from './images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img className='Header-logo' src={logo} />
        Coffee Dolphins
        <div className='Header-userInfo'>
          Вы вошли как <b>Сергей Шишкалов</b>, <a href='#'>выйти</a>
        </div>
      </div>
    )
  }
}
