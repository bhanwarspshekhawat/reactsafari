import React, { Component } from 'react';
import stone from '../image/stone.jpg';
import camel from '../image/camel.jpg';


class About extends Component {
    render() {
        return (
            <div className="Ac">

                <img src={stone} style={{ width: "250px" }} />
                <p>
                    Osian (Osiyan) is famous for its mesmerizing Hindu and Jain temples dating back from the 8th to the 11th centuries. Osian was once also a thriving business centre, being a stopover on the silk route between Delhi and the Middle East.
<br />
“Safari Camp Osian” is the permanent base camp at Osian. The Camp is nestled in the dunes, and is a short cross country drive into the desert from the Osian Village. Apart from the most clear night skies you may have ever seen, you also get to see the most beautiful desert sunsets and sunrise from the camp.
<br />
Enjoying the setting sun while sipping Champagne on the dunes, will go a long way down memory lane.
<br />
                    <br />
“Camping in Style” …  The tents are comfortable and spacious. Interiors are tastefully designed employing rural artisans in handicrafts and printing. These tents are luxury Swiss Cottages, with en-suite toilets, hot and cold showers and all modern amenities.
<br />
                    <br />
Enjoying the setting sun while sipping Champagne on the dunes, will go a long way down memory lane.
<br />
“Camping in Style” …  The tents are comfortable and spacious. Interiors are tastefully designed employing rural artisans in handicrafts and printing. These tents are luxury Swiss Cottages, with en-suite toilets, hot and cold showers and all modern amenities.

</p>
                <h3>Events at the Camp</h3>
                <p>Spread over a very large area, the camp is also proving to be a very interesting venue for
<br />Conferences, Royal Weddings, Theme Parties, and Gala Dinners. The professional and friendly staff
<br /> at the camp aim to give our guests an experience, and happy memories to carry back home.</p>
                <h3>The Mobile / Fly tents</h3>
                <p>We also have a mobile (fly tent) outfit for our overnight Safaris into the desert. All mobile tents also
<br /> have en-suite toilets. We can set up mobile camps ranging from 10 to 1000 tents for Weddings /
<br /> Corporate Events / Theme Dinners / Overnight Camping anywhere in India.</p>
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
export default About