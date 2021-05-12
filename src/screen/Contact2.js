import React, { Component } from 'react';
import camel from '../image/camel.jpg';



class Map extends Component {
    render(){
        return(
            <div class="row">
        <div class="col-sm-6">
          <div class="card-body">
            <div className="form">
              <input type="text" class="form-control" placeholder=" name" aria-label="Your name"></input>
              <br />
              <input type="text" class="form-control" placeholder="email" aria-label="Your name"></input>
              <br />

              <div class="form-group">
                <label for="comment"></label>
                <textarea class="form-control" rows="5" id="comment" placeholder="Quction"></textarea>
              </div>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card-body">

            <div class="mapouter"><div class="gmap_canvas">
              <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;
         height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              <a href="https://www.embedmymap.com/">Embed My Map</a></div></div>


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
export default Map