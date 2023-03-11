import React, { Component } from 'react'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {BsFillMoonFill , BsFillSunFill} from 'react-icons/bs'

import "./reset.css"
import "./App.css"


export default class App extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      colors: {
        "--background":"#222831",
        "--text":"#EEEEEE",
        "--color":"#00ADB5",
        "--boxcolor":"#393E46"
      },
      isLight: true,
      themeIcon: <BsFillMoonFill className='theme-moon'/>,
    }
    this.themeHandler = this.themeHandler.bind(this)
  }
  themeHandler () {
    console.log(this);
    if (this.state.isLight) {
      this.setState({
        isLight: false,
        themeIcon: <BsFillSunFill className='theme-sun'/>,
        colors: {
          "--background":"#EEEEEE",
          "--text":"#222831",
          "--color":"#393E46",
          "--boxcolor":"#00ADB5"
  
        }
      })
    } else if (!this.state.isLight) {
      this.setState({
        isLight: true,
        themeIcon: <BsFillMoonFill className='theme-moon'/>,
        colors: {
          "--background":"#222831",
          "--text":"#EEEEEE",
          "--color":"#00ADB5",
          "--boxcolor":"#393E46"
        },
      })
    }
  }

  render() {
    return (
      <div className="app" style={this.state.colors}>
        <Header themeHandleFunc={this.themeHandler} themeIcon={this.state.themeIcon}/>
        <Main/>
      </div>    
    )
  }
}

