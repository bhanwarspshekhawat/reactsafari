import './App.css';
import React, { Component } from 'react';
import LogoComp from './component/logo';
import Contact from './component/contact';
import Socil from './component/socil';
import Map from './component/map';
import Booking from './component/Booking';
import Footer from './component/Footer';
import Copy from './component/Copy';
import Home from './screen/Home';
import About from './screen/About';
import Image from './screen/Image';
import Contect2 from './screen/Contact2'

import { Button, Checkbox } from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',
      isChecked: false


    }
  }
  renderScreen() {
    if (this.state.selectedButton == "Home") {
      return <Home />
    } else if (this.state.selectedButton == "About") {
      return <About />
    }
    else if (this.state.selectedButton == "Img") {
      return <Image />
    }
    else if (this.state.selectedButton == "Contect2") {
      return <Contect2 />
    }
    else {
      return <Socil />
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {<LogoComp />}
          <Button variant="contained">Default</Button>
          <Checkbox
            checked={this.state.isChecked}
            onChange={() => { this.setState({ isChecked: true }) }}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Contact
            onClick={(v) => { this.setState({ selectedButton: v }) }} />
          {this.renderScreen()}


          {/* {<Socil 
            onClickIcon={(valuell) => alert(valuell)}
          
          />} */}
          {/* <br />
          {<Map />}
          <br />
          {<Booking />}
          <br />
          {<Footer />}
          {<Copy />}
          {<Home/>}*
          
          {<About/>} */}
          {/* {<Image/>} */}
          {/* {<Contect2/>} */}

        </header>
      </div>
    );
  }
}

export default App;
