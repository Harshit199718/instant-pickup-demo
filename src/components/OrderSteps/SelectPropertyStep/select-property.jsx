import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './select-property.scss'

import AsidePanel from '../AsideStepsPanel'
import Form from '../FormIn1stStep'

import {
  pickupaddress,
  dropoffaddress,
  startcords,
  endcords,
} from '../../MainPage/StartingOrderArea/order-area'
import pen from '../../../content-constants/images/edit.png'
import arrow from '../../../content-constants/images/arrow.png'
import arrowBack from '../../../content-constants/images/arrow_back.png'
import arrowNext from '../../../content-constants/images/arrow.png'

import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaW5zdGFudHBpY2t1cDEiLCJhIjoiY2s0azB4d2dqMTF1aDNlbnR1NW13dzRlYSJ9.bpI5rXZol2w7bpeNgI2rEQ'

class SelectProperty extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yesComplete: '#',
      comp1: false,
      comp2: false,
    }
  }
  isComp1 = () => {
    this.setState({ comp1: true }, () => {
      if (this.state.comp2) {
        this.setState({ yesComplete: '/select-inventory' }, () =>
          console.log('success')
        )
      }
    })
  }
  isComp2 = () => {
    this.setState({ comp2: true }, () => {
      // console.log('doone')
      if (this.state.comp1) {
        this.setState({ yesComplete: '/select-inventory' })
      }
    })
  }

  isComplete = () => {
    if (this.state.isComp1 && this.state.isComp2) {
      this.setState({ yesComplete: '/select-inventory' }, () =>
        console.log('success')
      )
    }
  }
  isNotComplete = () => {
    this.setState({ yesComplete: '#' })
  }
  getComplete = () => {
    return this.state.yesComplete
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
      zoom: 10,
    })
    // map.addControl(
    // 	new MapboxDirections({
    // 		profile: 'walking',
    // 		accessToken: mapboxgl.accessToken,
    // 	}),
    // 	'top-left',
    // );
    map.addControl(directions, 'top-left')

    map.on('load', function () {
      directions.setOrigin(startcords)
      directions.setDestination(endcords)
    })
  }

  render() {
    return (
      <div className="first-step-container flex-column flex-md-row">
        <AsidePanel
          first="1"
          second="2"
          third="3"
          fourth="4"
          colorFirst="#E0E0E0"
          colorSecond="#E0E0E0"
          colorThird="#E0E0E0"
          classNameFirst="circle"
          classNameSecond="circle passive"
          classNameThird="circle passive"
          classNameFourth="circle passive"
        />
        <div className="forms-container order-3 order-md-2">
          <Form
            name="Pickup Location"
            address={pickupaddress}
            isComp={this.isComp1}
            isComplete={this.isComplete}
            isNotComplete={this.isNotComplete}
          />
          <Form
            name="Dropoff Location"
            address={dropoffaddress}
            isComp={this.isComp2}
            isComplete={this.isComplete}
            isNotComplete={this.isNotComplete}
          />
        </div>
        <div className="location-and-links-container order-2 order-md-3">
          <div className="location-description-container ">
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
              <div className='order-1 order-sm-1'>
                <p className="way-container__place"><span>Moving</span><i class="fa fa-compass d-inline-block d-sm-none mr-4" aria-hidden="true"></i> From</p>
                <p className="way-container__address">{pickupaddress}</p>
              </div>
              <div className="arrow-container order-sm-2 d-none d-sm-block">
                <img src={arrow} alt="" />
              </div>
              <div className='order-2 order-sm-3'>
                <p className="way-container__place"><span>Moving</span><i class="fa fa-map-marker d-inline-block d-sm-none mr-4" aria-hidden="true"></i> To</p>
                <p className="way-container__address">{dropoffaddress}</p>
              </div>
            </div>
          </div>
          <div className="btns-container btns-container-first">
            <Link to="/" className="back-btn-container back-btn-in-first">
              <img
                src={arrowBack}
                alt=""
                width="16"
                height="16"
                className="indentation"
              />
              <p className="back_text">Back</p>
            </Link>
            <Link
              to={this.getComplete()}
              className="next-step-button"
              onClick={this.isComplete()}
            >
              <p>NEXT STEP</p>
              <img src={arrowNext} alt="" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectProperty
