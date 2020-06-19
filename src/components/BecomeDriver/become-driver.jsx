import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './become-driver.scss'
import driverhome from '../../content-constants/images/driverhome.svg'
import currency from '../../content-constants/images/currency.png'
import drive from '../../content-constants/images/drive.png'
import support from '../../content-constants/images/support.png'
import AboutUs from '../MainPage/AboutUs'

export default class BecomeDriver extends Component {
  render() {
    return (
      <div className="become-a-partner-container">
        <div className="row mb-0 mb-md-4">
          <div className="apply-box container col-md-5 col-12 order-1 order-md-0">
            <h2 className="become-a-partner d-md-block d-none">
              Become
              <br /> A Partner
            </h2>
            <p className="want-to-text">WANT TO RIDE WITH US?</p>
            <div className="applcn-btn pt-3 mb-2 mx-auto">
              <Link to="/become-a-partner-step-one">APPLY NOW</Link>
            </div>
          </div>
          <div className="svg-become-driver col-md-7 col-12 order-0 order-md-1">
            <h2 className="become-partner-sm">Become A Partner</h2>
            <img src={driverhome} alt="" />
          </div>
        </div>
        <div className="choose-when mt-2 mb-2 mt-md-5 mb-md-3">
          <h3>Choose when to work</h3>
          <br />
          <div className="d-flex flex-wrap flex-column flex-md-row justify-content-around">
            <div className="container show-box text-left mx-auto my-2 pb-5 pb-md-0">
              <div className="col-12 text-center mt-4">
                <img src={currency} alt="" />
              </div>
              <h4 className="mt-2 text-center">Earn</h4>
              <hr />
              <ul>
                <li>
                  You'll be self employed and free to work in compliance with
                  your own availability
                </li>
                <li>
                  Consistent, regular and financially rewarding work for you
                </li>
              </ul>
            </div>
            <div className="container show-box text-left mx-auto my-2 pb-5 pb-md-0">
              <div
                className="col-12 text-center mt-4"
                style={{ minHeight: '45px' }}
              >
                <img src={drive} alt="" />
              </div>
              <h4 className="mt-2 text-center">Drive</h4>
              <hr />
              <ul>
                <li>All our vans are less than four years old</li>
                <li>Free rental available</li>
                <li>No Congestion Zone fees</li>
                <li>
                  All jobs are distributed fairly and evenly by our bespoke
                  computer application system
                </li>
              </ul>
            </div>
            <div className="container show-box text-left mx-auto my-2 pb-5 pb-md-0">
              <div className="col-12 text-center mt-4">
                <img src={support} alt="" />
              </div>
              <h4 className="mt-2 text-center">Support</h4>
              <hr />
              <ul>
                <li>
                  Non-stop support from our backroom staff and controllers at HQ
                </li>
                <li>
                  Every job is recorded electronically on a daily basis, so that
                  you never miss out your payment
                </li>
                <li>
                  We’ll support you with admin where required (e.g. tax returns)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="applcn-btn pt-3  mx-auto last-appln-btn">
          <Link to="/become-a-partner-step-one">APPLY NOW</Link>
        </div>
        <AboutUs width='100%' margin='10px'/>
      </div>
    )
  }
}
