import React, { Component } from 'react'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButton: '',
            isShow: false

        }
    }

    render() {
        if (this.state.isShow == true) {
            return (
                <div>
                    <input type="text" className="bar" placeholder="Search.." size="90" name="search" />
                    <button onClick={() => this.setState({ isShow: false })} type="submit"><i class="fa fa-remove"
                    ></i></button>
                </div>

            )
        }
        else {


            return (
                <ul>
                    <h3 className="H">CONTACT US</h3>
                    <li className="nav"><a onClick={() => this.setState({ isShow: true })} href="#" class="fa fa-search"></a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'book' ? "active" : "no"} href="#Support" onClick={() => {
                        this.setState({ selectedButton: 'book' })
                    }} >BOOK NOW</a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'contact' ? "active" : ""} href="#contact" onClick={() => {
                        this.setState({ selectedButton: 'contact' })
                        this.props.onClick("Contect2")
                    }}>CONTACT US</a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'IMAGE GALLERY' ? "active" : ""} href="#img" onClick={() => {
                        this.setState({ selectedButton: 'IMAGE GALLERY' })
                        this.props.onClick("Img")
                    }}>IMAGE GALLERY</a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'PACKAGES' ? "active" : ""} href="#package" onClick={() => this.setState({ selectedButton: 'PACKAGES' })}>PACKAGES</a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'ABOUT US' ? "active" : ""} href="#about" onClick={() => {
                        this.setState({ selectedButton: 'ABOUT US' })
                        this.props.onClick("About")
                    }}>ABOUT US</a></li>
                    <li className="nav"><a class={this.state.selectedButton == 'HOME' ? "active" : ""} href="#home" onClick={() => {
                        this.setState({ selectedButton: 'HOME' })
                        this.props.onClick("Home")
                    }}>HOME</a></li>
                </ul>
            )
        }
    }
}
export default Contact