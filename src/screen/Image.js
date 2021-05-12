import React, { Component } from 'react';
import camel from '../image/camel.jpg';
import tante from '../image/tante.jpg';
import side from '../image/side tante.jpg';
import jeep from '../image/jeep.jpg';
import jeep2 from '../image/jeep2.jpg';
import cameln from '../image/cameln.jpg';
import thar from '../image/thar.jpg';
import chair from '../image/chair.jpg'
import choice from '../image/choice.png'


class Image extends Component {
    render() {
        return (
            <div className="Ac2">
                <div class="row">
  <div class="column">
    <img src={jeep2} style={{ width: "250px" }}/>
  </div>
  <div class="column">
    <img src={tante} style={{ width: "250px" }}/>
  </div>
  <div class="column">
    <img src={jeep} style={{ width: "250px" }}/>
  </div>
  <div class="column">
    <img src={thar} style={{ width: "250px" }}/>
  </div>  
        </div>
        <div class="bg">
                    <div class="container">

                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card-body">
                                    <img src={camel} style={{ width: "250px" }} />
                                    <p class="card-text">Osian is situated at the beginning <br />
      of the Great Thar Desert. Camel<br />
       Safaris into the desert are<br />
        conducted from here.
      </p>
                                    <a href="#" class="fa fa-phone"> +91 702 347 7221</a>
                                    <br />
                                    <a href="#" class="fa fa-map-marker">  Safari Camp Osian, Kasra no.</a>
                                    <br />
                                    <p>808, Pratap Nagar, Osian,
        <br /> Rajasthan 342303</p>
                                    <a href="#" class="fa fa-envelope"> safaricamposian@gmail.com</a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card-body">
                                    <div class="title"></div>
                                    <h5>LATEST NEWS</h5>
                                    <p >No posts were found.</p>
                                </div>
                            </div>
                            <div class="col-sm-4">

                                <div class="card-body">

                                    <div class="title"></div>
                                    <p class="card-text">
                                        <h5>INSTAGRAM FEED</h5>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-instagram"></a>
                                        <a href="#" class="fa fa-linkedin"></a>
                                        <a href="#" class="fa fa-pindrop"></a>
                                        <a href="#" class="fa fa-vimeo"></a>
                                        <a href="#" class="fa fa-dribbble"></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last">
                    <p>Copyright © Safaricamposian.in 2019<br />
All Rights Reserved.</p>
                </div>
        </div>


       )
   }
}
export default Image;