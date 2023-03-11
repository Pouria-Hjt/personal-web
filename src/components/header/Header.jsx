import './Header.css'

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <p className="header__logo">Poriw</p>
        <div className="heaedr__theme" onClick={this.props.themeHandleFunc}>
            {this.props.themeIcon}
        </div>
      </header>    
    )
  }
}

