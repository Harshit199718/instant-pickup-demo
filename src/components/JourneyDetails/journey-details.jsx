import React, { Component } from "react";
import "./journey-details.scss";
import {
  pickupaddress,
  dropoffaddress,
  startcords,
  endcords,
} from "../MainPage/StartingOrderArea/order-area";
import Geocoder from 'react-mapbox-gl-geocoder'

import van1 from "../../content-constants/images/van1.jpg";
import van2 from "../../content-constants/images/van2.jpg";
import weightImg from "../../content-constants/images/weightImg.svg";
import ukImg from "../../content-constants/images/ukImg.png";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5zdGFudHBpY2t1cDEiLCJhIjoiY2s0azB4d2dqMTF1aDNlbnR1NW13dzRlYSJ9.bpI5rXZol2w7bpeNgI2rEQ";
  const mapAccess = {
    mapboxApiAccessToken:
      'pk.eyJ1IjoiaW5zdGFudHBpY2t1cDEiLCJhIjoiY2s0azB4d2dqMTF1aDNlbnR1NW13dzRlYSJ9.bpI5rXZol2w7bpeNgI2rEQ',
  }

  const queryParams = {
    country: 'gb',
  }
  
  let pickupadd = ''
  let dropoffadd = ''
  let startcord = []
  let endcord = []

  const MyInput = (props) => {
    return (
      <div className="select">
              <div>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div className="enter-location pick-location">
                  <h5>{props.inputTitle} </h5>
                  <input {...props} type="text" placeholder='ENTER LOCATION'/>
                  {/* <select name="pickSelect" id="" className="pick-select">
                    <option disabled selected value="">
                      Enter Location
                    </option>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                    <option value="">option 4</option>
                    <option value="">option 5</option>
                  </select> */}
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <span>+</span>
              </div>
            </div>
    )
  }

class JourneyDetails extends Component {

  constructor(){
    super()
    this.state={
      imageUrl:'',
      imageText:true,
      buttonText:'UPLOAD IMAGE',
      viewport: {}
    }
  }

  handleImageUpload = (e) =>{
    this.setState({
      imageUrl:URL.createObjectURL(e.target.files[0]),
      imageText: false,
      buttonText: 'CHANGE IMAGE'
    })
  }

  onSelected = (viewport, item) => {
    this.setState({ viewport })
    pickupadd = item.place_name
    startcord = item.geometry.coordinates

    console.log(item)
    console.log('Selected: ', pickupadd, startcord)
  }

  onSelectedTwo = (viewport, item) => {
    this.setState({ viewport })
    dropoffadd = item.place_name
    endcord = item.geometry.coordinates
    console.log('Selected: ', dropoffadd, endcord)
  }

  componentDidMount() {
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    const map = new mapboxgl.Map({
      container: this.map,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.1275, 51.50722],
      zoom: 10,
    });
    // map.addControl(
    // 	new MapboxDirections({
    // 		profile: 'walking',
    // 		accessToken: mapboxgl.accessToken,
    // 	}),
    // 	'top-left',
    // );
    map.addControl(directions, "top-left");

    map.on("load", function () {
      directions.setOrigin(startcords);
      directions.setDestination(endcords);
    });
  }
  render() {
    let {viewport} = this.state
    return (
      <div className="journey-details">
        <div className="journey-and-contact-details_container">
          <div className="journey-details_container">
            <h2 className="journey-details-header">Journey Details</h2>
            <Geocoder
                {...mapAccess}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                updateInputOnSelect={true}
                // className="point pickup"
                inputComponent={(props) => <MyInput {...props} inputTitle='PICK UP'/>}
                queryParams={queryParams}
              />
            {/* <div className="select">
              <div>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div className="enter-location pick-location">
                  <h5>PICK UP</h5>
                  
                  <select name="pickSelect" id="" className="pick-select">
                    <option disabled selected value="">
                      Enter Location
                    </option>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                    <option value="">option 4</option>
                    <option value="">option 5</option>
                  </select>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <span>+</span>
              </div>
            </div> */}
            <h5>EDIT ADDRESS</h5>
            <Geocoder
                {...mapAccess}
                onSelected={this.onSelectedTwo}
                viewport={viewport}
                hideOnSelect={true}
                updateInputOnSelect={true}
                // className="point dropoff"
                inputComponent={(props) => <MyInput {...props} inputTitle='DROP OFF'/>}
                queryParams={queryParams}
              />
            {/* <div className="select">
              <div>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div className="enter-location drop-location">
                  <h5>DROP OFF</h5>
                  
                  <select name="pickSelect" id="" className="pick-select">
                    <option disabled selected value="">
                      Enter Location
                    </option>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                    <option value="">option 4</option>
                    <option value="">option 5</option>
                  </select>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <span>+</span>
              </div>
            </div> */}
            <h5>EDIT ADDRESS</h5>
            <div className="select">
              <div>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <div className="enter-location date-of-journey">
                  <h5>DATE OF JOURNEY</h5>
                  {/* <select name="pickSelect" id="" className="pick-select">
                    <option disabled selected value="">
                      ASAP
                    </option>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                    <option value="">option 4</option>
                    <option value="">option 5</option>
                  </select> */}
                  <input type="text" placeholder='ASAP'/>
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <h4><span>MORE OPTIONS<i className="fa fa-caret-down ml-1"></i></span><span>ADD NOTES</span></h4>
          </div>
          <div className="choose-your-delivery-vehicle_container">
            <h2 className="choose-your-vehicle-header">Choose Your Vehicle</h2>
            <div className="van-details">
              <div className="van-img_container">
                <img src={van1} alt="" />
                <div>
                  <span>
                    <i class="fa fa-arrow-left mr-1" aria-hidden="true"></i>
                    <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>
                    1.7x1.5x1.2m
                  </span>
                  <span>
                    <img className="mr-1" src={weightImg} alt="" />
                    Up to 705 kg
                  </span>
                </div>
              </div>
              <div className="van-details_container mt-4 mb-3 my-sm-0">
                <h5>Small Vans</h5>
                <h6>For items that will fit in a car boot</h6>
              </div>
            </div>
            <div className="van-details">
              <div className="van-img_container">
                <img src={van2} alt="" />
                <div>
                  <span>
                    <i class="fa fa-arrow-left mr-1" aria-hidden="true"></i>
                    <i class="fa fa-arrow-right mr-1" aria-hidden="true"></i>
                    2.5x1.5x1.9m
                  </span>
                  <span>
                    <img className="mr-1" src={weightImg} alt="" />
                    Up to 580 kg
                  </span>
                </div>
              </div>
              <div className="van-details_container mt-4 mb-3 my-sm-0">
                <h5>Small Vans</h5>
                <h6>For items that will fit in a car boot</h6>
              </div>
            </div>
          </div>

          <div className="contact-details_container">
            <h2 className="contact-details-header">Contact Details</h2>
            <div>
              <span>!</span>
              <p>
                By providing personal data, you acknowledge that you have read
                and understood our
                <a href="#">Privacy Notice</a>
              </p>
            </div>
            <div className="pickup-details">
              <h5 className="pick-up-header">Pick Up Contact Details</h5>
              <div className="pick-up-inputs inputs">
                <div className="input-for-name">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="input-for-email-and-mobile">
                  <div className="input-for-email">
                    <label htmlFor="">E-MAIL</label>
                    <input type="text" placeholder="Enter E-mail" />
                  </div>
                  <div className="input-for-mobile">
                    <label htmlFor="">Mobile Number</label>
                    <img src={ukImg} alt="" />
                    {/* <i className="fa fa-caret-down ml-1"></i>
                    <span className="ml-1">+44</span> */}
                    <input type="text" placeholder='Enter Mobile No.'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropoff-details">
              <h5 className="dropoff-header">Drop Off Contact Details</h5>
              <div className="dropoff-inputs inputs">
                <div className="input-for-name">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="input-for-email-and-mobile">
                  <div className="input-for-email">
                    <label htmlFor="">E-MAIL</label>
                    <input type="text" placeholder="Enter E-mail" />
                  </div>
                  <div className="input-for-mobile">
                    <label htmlFor="">Mobile Number</label>
                    <img src={ukImg} alt="" />
                    {/* <i className="fa fa-caret-down ml-1"></i>
                    <span className="ml-1">+44</span> */}
                    <input type="text" placeholder='Enter Mobile No.'/>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="add-proof text-right p-0 m-0">
              ADD ADDITIONAL 'PROOF OF DROP CONTACT'
              <i class="fa fa-plus-circle ml-2" aria-hidden="true"></i>
            </h5>
          </div>

          <div className="additional-info_container">
            <h2 className="additional-info-header">Additional Information</h2>
            <div>
              <h5>If any single item is above 30Kg</h5>
              <div className="ckeckbox">
                <input type="checkbox" name="" id="" />
                <div className="check-toggler"></div>
              </div>
            </div>
            <div>
              <h5>Any special instructions or notes?</h5>
              <div className="additional-info-input_container">
                <input
                  type="text"
                  placeholder="E.g. Parking available, sofa comes apart, etc."
                />
              </div>
            </div>
          </div>

          <div className="image-upload_container">
            <div className="image_container">
              {
                this.state.imageText ?
                (<span className='m-4'>Upload image</span>
                ):
                <img src={this.state.imageUrl} alt=""/>
              }
            </div>
            <div className="button_container mt-2">
              <button className='py-2'>{this.state.buttonText}</button>
              <input type="file" accept='image/*' onChange={(e)=> this.handleImageUpload(e)}/>
            </div>
          </div>

          <div className="payment-details_container">
            <h2 className="payment-details-header">Payment Details</h2>
            <button className="mr-2 py-2 px-1 px-md-2">VISA-Checkout</button>
            <button className="mr-2 py-2 px-1 px-md-2">Card</button>
            <button className="mr-2 py-2 px-1 px-md-2">Paypal</button>
          </div>
        </div>

        <div className="location-and-book-now_container">
          <div className="location_container">
            <div className="map" ref={(el) => (this.map = el)}></div>
          </div>
          <div className="summary-and-book-now_container">
            <div className="summary_container">
                {/* <hr className="summaryLine"/> */}
              <div className="from-details">
                <div>
                  <h2>FROM</h2>
                  <h5>Information required</h5>
                </div>
              </div>
              <div className="to-details">
                <div>
                  <h2>TO</h2>
                  <h5>Information required</h5>
                </div>
              </div>
              <div className="servicr-type-details">
                <div>
                  <h2>SERVICE TYPE</h2>
                  <h5>Parcel</h5>
                </div>
              </div>
              <div className="contact-details">
                <div>
                  <h2>CONTACT DETAILS</h2>
                  <h5>Information required</h5>
                </div>
              </div>
              <div className="payment-details">
                  <div>
                    <h2>PAYMENT DETAILS</h2>
                    <h5>Cash</h5>
                  </div>
              </div>
            </div>

            {/* <div class="wrapper">
              <ul class="StepProgress">
                <li class="StepProgress-item is-done">
                  <strong>Post a contest</strong>
                </li>
                <li class="StepProgress-item is-done">
                  <strong>Award an entry</strong>
                  Got more entries that you love? Buy more entries anytime! Just
                  hover on your favorite entry and click the Buy button
                </li>
                <li class="StepProgress-item current">
                  <strong>Post a contest</strong>
                </li>
                <li class="StepProgress-item">
                  <strong>Handover</strong>
                </li>
                <li class="StepProgress-item">
                  <strong>Provide feedback</strong>
                </li>
              </ul>
            </div>
             */}
            <div className="promo_container">
              <h5>
                HAVE A PROMO ? PLEASE <a href="#">SIGN IN</a> TO USE
              </h5>
            </div>
            <div className="book-now_container">
              <h2>$45.00</h2>
              <button className='py-4'>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JourneyDetails;
