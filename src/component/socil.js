import React, { Component } from 'react'
import SocilIcon from './socialIcon'

class Socil extends Component {


    renderSocialItem(socialType, socialClass, socillink) {
        return (
            <a onClick={() => alert(socialType)} href={socillink} class={socialClass}>{socialType}</a>
        )
    }
    render() {
        return (
            <div className="fg">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card-body">
                            <a href="#" >Safari Camp Osian / Contact Us</a>
                        </div>

                    </div>
                    <div class="col-sm-6">
                        <div class="card-body">
                            <p class="card-text"><a href="#"></a></p>
                            {this.renderSocialItem('FACEBOOK', "fa fa-facebook", "#")}
                            {this.renderSocialItem('TWITTER', "fa fa-twitter", "#")}
                            <SocilIcon 
                                socialType={'GO OGLE PLUS'}
                                socialClass={"fa fa-google-plus"}
                                socillink={"#"}
                                onClickIcon={(valuell) => alert(valuell)}
                            />
                            <SocilIcon 
                                socialType={'TUMBLR'}
                                socialClass={ "fa fa-tumblr"}
                                socillink={"#"}
                                onClickIcon={(valuell) => alert(valuell)}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Socil