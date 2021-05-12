import React, { Component } from 'react'
import logo from '../image/logo.png';

class Logo extends Component {
    render() {
        return (
            <div className="f1">
              <div className="App-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
      
          )
    }
}

export default Logo