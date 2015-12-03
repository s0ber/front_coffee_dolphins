import './Header.sass'
import React, {Component} from 'react'
import logo from './images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img className='Header-logo' src={logo} />
        Coffee Dolphins
        {this.props.isAuthorized &&
          <div className='Header-userInfo'>
            Вы вошли как <b>{this.props.currentUser.full_name}</b>, <span className='Header-logout' onClick={this.props.onLogout}>выйти</span>
          </div>
        }
      </div>
    )
  }
}
