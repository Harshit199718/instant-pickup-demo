import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './fourth-step.scss'

import AsidePanel from '../AsideStepsPanel'
import {
  pickupaddress,
  dropoffaddress,
} from '../../MainPage/StartingOrderArea/order-area'

import pen from '../../../content-constants/images/edit.png'
import point from '../../../content-constants/images/dropoff.png'
import arrow from '../../../content-constants/images/arrow.png'
import city from '../../../content-constants/images/location_city.png'
import list from '../../../content-constants/images/list.png'
import medium from '../../../content-constants/images/mediumvan.png'
import luton from '../../../content-constants/images/luton.png'
import driver from '../../../content-constants/images/one-driver.png'
import drivers from '../../../content-constants/images/two-drivers.png'

class GetPrice extends Component {
  state = {
    car: 'Medium Van',
    firstFormula: '£30 + £0.50',
    secondFormula: '£45 + £0.75',
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

  seeMore = (e) =>{
    e.preventDefault()
  }

  render() {
    return (
      <div className="fourth-step-container">
        <AsidePanel
          first="✓"
          second="✓"
          third="✓"
          fourth="4"
          colorFirst="#8EAD28"
          colorSecond="#8EAD28"
          colorThird="#8EAD28"
          classNameFirst="circle"
          classNameSecond="circle"
          classNameThird="circle"
          classNameFourth="circle"
        />
        <div className="edit-info-container">
          <div>
            <div className="pickup-date-container">
              <p className="pickup-date-text">Pickup date</p>
              {/* <div className="edit-button">
								<img src={pen} alt="pen" width="12" height="12" />
								<p>EDIT</p>
							</div> */}
            </div>
            <div>
              <p className="date-text">
                <span>Sat, Oct 19, 2019</span>
                <span className="dot">&#8226;</span>
                <span>7am - 12pm</span>
              </p>
            </div>
          </div>
          <div className="summary-and-floors">
            <div className="summary-move-container">
              <div className="summary-header">
                <div className="summary-header">
                  <img src={point} alt="" width="14" height="20" />
                  <p className="summary-header-p">Your Summary Move</p>
                </div>
                {/* <div className="edit-button">
									<img src={pen} alt="pen" width="12" height="12" />
									<p>EDIT</p>
								</div> */}
              </div>
              <div className="pickup-and-dropoff-points-container points-container">
                <div>
                  <h6><i class="fa fa-compass" aria-hidden="true"></i>From</h6>
                  <p>{pickupaddress}</p>
                </div>
                <div className="pickup-and-dropoff-points-container__img-container">
                  <img src={arrow} alt="" />
                </div>
                <div>
                  <h6><i class="fa fa-map-marker" aria-hidden="true"></i>To</h6>
                  <p>{dropoffaddress}</p>
                </div>
              </div>
            </div>
            <div className="summary-move-container border">
              <div className="summary-header">
                <div className="summary-header">
                  <img src={city} alt="" width="14" height="20" />
                  <p className="summary-header-p">Your Floors Detail</p>
                </div>
                {/* <div className="edit-button">
									<img src={pen} alt="pen" width="12" height="12" />
									<p>EDIT</p>
								</div> */}
              </div>
              <div className="pickup-and-dropoff-points-container padding">
                <div className="padding__type-of-house">
                  <p>House</p>
                  <h6>Ground Floor</h6>
                </div>
                <div className="pickup-and-dropoff-points-container__img-container">
                  <img src={arrow} alt="" />
                  <i class="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div className="padding__type-of-house">
                  <p>Room</p>
                  <h6>Floor 1st</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="inventory-list-container">
            <div className="summary-header inventory-list-header">
              <div className="summary-header">
                <img src={list} alt="" width="24" height="18" />
                <p className="summary-header-p">Your Inventory List</p>
                <h6>
                  total <span>5</span> item <a href="#" onClick={(e)=> this.seeMore(e)} className="see-more">see more</a>
                </h6>
              </div>
              {/* <div className="edit-button">
								<img src={pen} alt="pen" width="12" height="12" />
								<p>EDIT</p>
							</div> */}
            </div>
            <div className="chosen-items-container">
              <div>
                <p>ddsjjkhsd</p>
                <p>djdjdj</p>
                <p>dkddkkdkdk</p>
                <p>dkddkkdkdk</p>
                <p>ddsjjkhsd</p>
                <p>djdjdj</p>
                <p>dkddkkdkdk</p>
                <p>dkddkkdkdk</p>
              </div>
              <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>3</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="choose-delivery-container">
          <div className="choose-van-container">
            <div className="choose-van-h5-container">
              <h5>Choose your delivery Venicle</h5>
            </div>
            <div className="vans-images-container">
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
              <Link to="/confirm-payment" className="book-btn">
                BOOK
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
              <Link to="/confirm-payment" className="book-btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GetPrice
