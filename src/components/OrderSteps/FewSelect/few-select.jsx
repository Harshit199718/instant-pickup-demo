import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './few-select.scss'
import { Date } from '../ThirdStep/third-step.jsx'

import {
  pickupaddress,
  dropoffaddress,
  startcords,
  endcords,
} from '../../MainPage/StartingOrderArea/order-area'
import pen from '../../../content-constants/images/edit.png'
import arrow from '../../../content-constants/images/arrow.png'

import medium from '../../../content-constants/images/mediumvan.png'
import luton from '../../../content-constants/images/luton.png'
import driver from '../../../content-constants/images/one-driver.png'
import drivers from '../../../content-constants/images/two-drivers.png'
import name from '../../../content-constants/images/name.png'
import email from '../../../content-constants/images/email.png'
import tel from '../../../content-constants/images/tel.png'
import note from '../../../content-constants/images/noteinf.png'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaW5zdGFudHBpY2t1cDEiLCJhIjoiY2s0azB4d2dqMTF1aDNlbnR1NW13dzRlYSJ9.bpI5rXZol2w7bpeNgI2rEQ'

const Contact = () => {
  return (
    <div className="contact-information mb-2 mt-2">
      <div className="contact-information__h5-container">
        <h5>Contact Details</h5>
      </div>
      <div className="contact-notes">
        <div className="contact-notes-p-container">
          <p>Pick Up contact details</p>
        </div>
        <div className="checkbox-container-in-payment">
          <input type="checkbox" className="checkbox-input" />
          <p>use the same details for drop off</p>
        </div>
      </div>
      <div className="name-input-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          className="name-input"
        />
        <img src={name} alt="" className="name-image" />
      </div>
      <div className="email-and-tel-container">
        <input
          type="email"
          placeholder="people@gmail.com"
          className="email-input"
        />
        <img src={email} alt="" className="email-image mr-1" />
        <input type="tel" placeholder="+633-223-2327" className="tel-input" />
        <img src={tel} alt="" className="tel-image mr-1" />
      </div>
      <div className="privacy-note-container">
        <img src={note} alt="" width="16" height="16" />
        <p className="privacy-note">
          By providing personal data, you acknowledge that you have read and
          understood our <span>Privacy Notice</span>
        </p>
      </div>
    </div>
  )
}

class AdditionalInformation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: 0,
    }
  }

  showActive = () => {
    console.log('hi')
    const checkedval = this.state.checked === 0 ? 1 : 0

    this.setState({
      checked: checkedval,
    })
  }

  render() {
    return (
      <div className=" border addn-cont">
        <div className="additional-information-container__header">
          <div>
            <h3>Additional Information</h3>
          </div>
        </div>
        <div>
          <div className="select-additional-service-container">
            <div className="row addn-row">
              <div className="col-8 mx-auto">
                <h6>If any single item is above 30kg </h6>
              </div>
              <div>
                <div class="container col-4 mt-3">
                  <input
                    type="checkbox"
                    id="toggle-button"
                    class="toggle-button"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="special-instructions-container">
            <label>
              <p>Any special instruction or notes?</p>
            </label>
            <input
              type="text"
              placeholder="E.g Parking available, sofa comes apart, etc."
            />
          </div>
        </div>
      </div>
    )
  }
}

class SelectProperty extends Component {
  state = {
    car: 'Medium Van',
    firstFormula: '£30 + £0.50',
    secondFormula: '£45 + £0.75',
  }
  componentDidMount() {
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    })

    const map = new mapboxgl.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-0.1275, 51.50722],
      zoom: 4,
    })

    map.addControl(directions, 'top-left')

    map.on('load', function () {
      // console.log((startcords[0] + startcords[1]) / 2)
      directions.setOrigin(startcords)
      directions.setDestination(endcords)
    })
    // map.panTo(startcords)
  }

  onClickMedium = (el) => {
    this.setState({
      car: 'Medium Van',
      firstFormula: '£30 + £0.50',
      secondFormula: '£45 + £0.75',
    })

    if (el.target === 'div') {
      el.target.style.opacity = '1'
      el.target.previousSibling.style.opacity = '0.5'
    }
  }

  onClickLuton = (el) => {
    this.setState({
      car: 'Luton',
      firstFormula: '£45 + £0.75',
      secondFormula: '£55 + £0.92',
    })

    if (el.target === 'div') {
      el.target.style.opacity = '1'
      el.target.previousSibling.style.opacity = '0.5'
    }
  }
  render() {
    return (
      <div className="first-step-container row mx-md-5">
        {/* enter */}
        <div className="col-12 col-md-6 px-0 px-md-3 order-2 order-md-1">
          <div className="choose-delivery-container this-adjust mb-2">
            <div className="choose-van-container mb-2">
              <div className="choose-van-h5-container pt-2">
                <h5>Choose your delivery Vehicle</h5>
              </div>
              <div className="vans-images-container mt-4">
                <div className="van-container" onClick={this.onClickMedium}>
                  <p>Medium Van</p>
                  <img src={medium} alt="" />
                </div>
                <div className="van-container" onClick={this.onClickLuton}>
                  <p>Luton</p>
                  <img src={luton} alt="" />
                </div>
              </div>
            </div>
            {/* classes,consts */}
            <Contact />
            <AdditionalInformation />
            {/* classes,consts */}
            <div className="type-of-price-container">
              <div>
                <p className="chosen-type">
                  {this.state.car}, <span>1 instant staff</span>
                </p>
              </div>
              <div className="type-of-price-container__calc-container">
                <div>
                  <p className="formula-container">
                    {this.state.firstFormula}
                    <span>per labor min</span>
                  </p>
                </div>
                <div className="image-with-driver">
                  <img src={luton} alt="" />
                  <img src={driver} alt="" className="driver" />
                </div>
                <Link to="/confirm-payment" className="book-btn pt-2">
                  <p>BOOK</p>
                </Link>
              </div>
            </div>
            <div className="type-of-price-container">
              <div>
                <p className="chosen-type">
                  {this.state.car}, <span>2 instant staff</span>
                </p>
              </div>
              <div className="type-of-price-container__calc-container">
                <div>
                  <p className="formula-container">
                    {this.state.secondFormula}
                    <span>per labor min</span>
                  </p>
                </div>
                <div className="image-with-driver">
                  <img src={luton} alt="" />
                  <img src={drivers} alt="" className="driver" />
                </div>
                <Link to="/confirm-payment" className="book-btn pt-2">
                  <p>BOOK</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* exit */}
        <div className="col-12 col-md-6 px-0 px-md-3 order-1 order-md-2">
          <div className="location-and-links-container">
            <div className="location-description-container">
              <div ref={(el) => (this.map = el)}></div>
              <div className="summary">
                <div>
                  <h3>Your Summary Move</h3>
                </div>
                {/* <div className="edit-container">
                  <img src={pen} alt="pen" width="12" height="12" />
                  <p className="edit-text">EDIT</p>
                </div> */}
              </div>
              <div className="way-container">
                <div>
                  <p className="way-container__place">
                    <i className="fa fa-compass"></i><span> Moving</span> From {'('}A{')'}
                  </p>
                  <p className="way-container__address">{pickupaddress}</p>
                </div>
                <div className="arrow-container">
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <p className="way-container__place">
                   <i className="fa fa-map-marker"></i><span> Moving </span>To {'('}B{')'}
                  </p>
                  <p className="way-container__address">{dropoffaddress}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="datebox">
            <Date />
          </div>
        </div>
      </div>
    )
  }
}

export default SelectProperty
