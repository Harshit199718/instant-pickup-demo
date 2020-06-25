import React, { Component } from 'react'
import './order-area.scss'
import illustration from '../../../content-constants/images/illustration.png'
import van from '../../../content-constants/images/non-diesel-van.png'
import Geocoder from 'react-mapbox-gl-geocoder'
import { Link } from 'react-router-dom'

const mapAccess = {
  mapboxApiAccessToken:
    'pk.eyJ1IjoiaW5zdGFudHBpY2t1cDEiLCJhIjoiY2s0azB4d2dqMTF1aDNlbnR1NW13dzRlYSJ9.bpI5rXZol2w7bpeNgI2rEQ',
}

const queryParams = {
  country: 'gb',
}

let pickupaddress = ''
let dropoffaddress = ''
let startcords = []
let endcords = []

const MyInput = (props) => {
  return <input {...props} required placeholder={props.placeholder} />
}
class OrderArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewport: {},
      isFewItems: 'no',
    }
    this.onChange = this.onChange.bind(this)
  }

  Button() {
    if (pickupaddress === '' && dropoffaddress === '') {
      return <p className="text-before-filling">GET A QUOTE</p>
    } else {
      if (this.state.isFewItems === 'yes') {
        return <Link to="/few-select">GET A QUOTE</Link>
      } else {
        return <Link to="/select-property">GET A QUOTE</Link>
      }
    }
  }
  onSelected = (viewport, item) => {
    this.setState({ viewport })
    pickupaddress = item.place_name
    startcords = item.geometry.coordinates

    console.log(item)
    console.log('Selected: ', pickupaddress, startcords)
  }

  onSelectedTwo = (viewport, item) => {
    this.setState({ viewport })
    dropoffaddress = item.place_name
    endcords = item.geometry.coordinates
    console.log('Selected: ', dropoffaddress, endcords)
  }

  onClick = (el) => {
    el.target.style.color = '#000000'
  }
  onChange = (el) => {
    this.setState({ isFewItems: el.target.value })
  }
  render() {
    const { viewport } = this.state

    return (
      <div className="order-and-carousel-container">
        <div className="order-container">
          <div className="h2-container text-justify">
            <h2 style={{ minHeight: '6.05em' }}>
              <a name="top">Moving</a> and relocation services that change the
              world one van at a time
            </h2>
          </div>
          <div className="eco-refresher-container">
            <div className="eco-refresher-container__img-container">
              <img src={van} alt="" />
            </div>
            <div className="eco-refresher-container__text-container">
              <div className="eco-refresher-container__h5-container">
                <h5 className="mt-3">Using Only Non-Diesel Vans</h5>
              </div>
              <div>
                <a>Learn more</a>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="select-type-container">
              <select
                className="select-type-of-transportation"
                onClick={this.onClick}
                onChange={this.onChange}
                value={this.state.isFewItems}
              >
                <option value="no">Total Home Removal</option>
                <option value="yes">Few Items/Single Room</option>
              </select>
            </div> */}
            <div className="input-points-container">
              <Geocoder
                {...mapAccess}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                updateInputOnSelect={true}
                className="point pickup"
                inputComponent={() => <MyInput placeholder="Pick up address" />}
                queryParams={queryParams}
              />
              <div className="doff">
                <Geocoder
                  {...mapAccess}
                  onSelected={this.onSelectedTwo}
                  viewport={viewport}
                  hideOnSelect={true}
                  updateInputOnSelect={true}
                  className="point dropoff"
                  inputComponent={() => <MyInput placeholder="Drop off address" />}
                  queryParams={queryParams}
                />
              </div>
            </div>
          </div>
          <div className="start-cacl-btn">{this.Button()}</div>
        </div>
        <div className="illustration-container">
          <img src={illustration} alt="" height="650" />
        </div>
      </div>
    )
  }
}

export { pickupaddress, dropoffaddress, startcords, endcords }

export default OrderArea
