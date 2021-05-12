import React, { Component } from 'react'

export default class SocialIcon extends Component {
    render() {
        return (
            <a onClick={() => this.props.onClickIcon(this.props.socialType)} href={this.props.socillink} class={this.props.socialClass}>{this.props.socialType}</a>
        )
    }
}