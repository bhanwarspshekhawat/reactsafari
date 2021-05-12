import React, { Component } from 'react';
import tante from '../image/tante.jpg';
import side from '../image/side tante.jpg';
import jeep from '../image/jeep.jpg';
import jeep2 from '../image/jeep2.jpg';
import cameln from '../image/cameln.jpg';
import thar from '../image/thar.jpg';
import chair from '../image/chair.jpg'
import choice from '../image/choice.png'
import camel from '../image/camel.jpg'


class Home extends Component {
    
    render() {
        return (
            <div className="tran">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={tante} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={side} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={jeep} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src={jeep2} class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <div className="night">
                    <h1>TOUR TYPE</h1>
                    <p>Osian is famous for its mesmerizing Hindu and Jain temples dating back<br />
                 from the 8th to the 11th centuries.</p>
                </div>
                <br />
                <div className="cent">
                    <h1>MOST POPULAR TOURS</h1>
                </div>



                <div class="card-group">
                    <div class="card">
                        <img src={thar} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Jeep Safari & Dune Bashing<span>INR3000</span></h5>
                            <p class="card-text">The option of a Jeep Safari allows the guest to explore the desert even further. Our rugged 4X4…</p>
                        </div>
                        <div class="footer">
                            <small class="text-muted"></small>
                        </div>
                    </div>
                    <div class="card">
                        <img src={chair} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Overnight Camping<span>INR1000</span></h5>
                            <p class="card-text">“Safari Camp Osian” is the permanent base camp at Osian. The Camp is nestled in the dunes, and…</p>
                        </div>
                        <div class="footer">
                            <small class="text-muted"></small>
                        </div>
                    </div>
                    <div class="card">
                        <img src={cameln} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Sunset Camel Safari<span>INR1000</span></h5>
                            <p class="text">Guests can go out on a sunset camel safari of about an hour duration. Here they are taken…</p>
                        </div>
                        <div class="footer">
                            <small class="text-muted"></small>
                        </div>
                    </div>
                </div>

                <br />
                <div className="cent">
                    <h1>ABOUT OSIAN</h1>
                    <p>Osian (Osiyan) is famous for its mesmerizing Hindu and Jain temples dating<br />
                     back from the 8th to the 11th centuries.</p>
                </div>

<div className="sm">
                <div class="row">
  <div class="col-sm-9">
    
      <div class="card-body">
    
        <p class="card-text"><b>“Safari Camp Osian”</b> is the permanent base camp at Osian. The Camp is nestled in the dunes and is a short cross country drive into the desert from the Osian Village. Apart from the clearest night skies, you may have ever seen, you also get to see the most beautiful desert sunsets and sunrise from the camp.
<br/>
<b>“Camping in Style” …</b>  The tents are comfortable and spacious. Interiors are tastefully designed employing rural artisans in handicrafts and printing. These tents are luxury Swiss Cottages, with en-suite toilets, hot and cold showers, and all modern amenities.
<br/>
<b>Enjoying the setting sun while sipping Champagne on the dunes, will go a long way down memory lane.</b>
<br/>
<b>“Camping in Style” … </b> The tents are comfortable and spacious. Interiors are tastefully designed employing rural artisans in handicrafts and printing. These tents are luxury Swiss Cottages, with en-suite toilets, hot and cold showers and all modern amenities.
<br/>
<b>Events at the Camp</b>

Spread over a very large area, the camp is also proving to be a very interesting venue for Conferences, Royal Weddings, Theme Parties, and Gala Dinners.

The professional and friendly staff at the camp aim to give our guests an experience, and happy memories to carry back home.</p>
    
      
    </div>
  </div>
  <div class="col-sm-3">
    
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <img src={choice}/>
        
    
    </div>
  </div>
</div>
</div>
<br/>
<div className="book1">
        <div class="row">
          <div class="col-sm-8">
            <div class="card-body">
              <a href="#" ></a>
              <a href="#" ><b>For Booking Call @+91- 76655 77221</b></a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card-body">
              <div className="primary">
                <a href="#"><button type="submit"  >CONTACT</button></a>
              </div>
            </div>

          </div>
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
export default Home