import React, { Component } from 'react'

class Booking extends Component{
    render(){
        return(
            <div className="book">
        <div class="row">
          <div class="col-sm-6">
            <div class="card-body">
              <a href="#" class="fa fa-calendar"></a>
              <a href="#" ><b>For Booking Call @+91- 76655 77221</b></a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <div className="primary">
                <a href="#"><button type="submit" class="fa fa-headphones" >Booking Now</button></a>
              </div>
            </div>

          </div>
        </div>
      </div>
        )
    }
}
export default Booking