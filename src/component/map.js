import React, { Component } from 'react'


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
      </div>
        )
    }
}
export default Map