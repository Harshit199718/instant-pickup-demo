import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import datepicker from 'js-datepicker'

import InputRange from 'react-input-range'
import SimpleReactCalendar from 'simple-react-calendar'
import './third-step.scss'
import 'react-input-range/lib/css/index.css'

import AsidePanel from '../AsideStepsPanel'

import arrowBack from '../../../content-constants/images/arrow_back.png'
import arrow from '../../../content-constants/images/arrow.png'
import name from '../../../content-constants/images/name.png'
import email from '../../../content-constants/images/email.png'
import tel from '../../../content-constants/images/tel.png'
import note from '../../../content-constants/images/noteinf.png'

const options = [
  { value: '1', label: 'Within one week' },
  { value: '2', label: 'On a Fixed Date' },
  { value: '3', label: 'Urgently' },
  { value: '4', label: 'Between dates' },
  { value: '5', label: 'I am flexible' },
  { value: '6', label: 'Do not have a date yet' },
]

const optionsUrgently = [
  { value: 'chocolate', label: 'Today ASAP' },
  { value: 'strawberry', label: 'Today Anytime' },
  { value: 'vanilla', label: 'Today or Tomorrow' },
  { value: 'strawberry', label: 'Tomorrow AM' },
  { value: 'vanilla', label: 'Tomorrow PM' },
  { value: 'vanilla', label: 'Tomorrow Anytime' },
]

const optionsCalendar = [{ value: 'vanilla', label: <input type="date" /> }]

// const picker = datepicker('date-picker');

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }
  onChange = (name) => (e) => {
    // const { name, email, phone } = this.state
    this.setState({ [name]: e.target.value })

    if (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.phone !== ''
    ) {
      this.props.isComplete()
    } else {
      this.props.isNotComplete()
    }
  }

  render() {
    return (
      <div className="contact-information">
        <div className="contact-information__h5-container">
          <h5>Contact Details</h5>
        </div>
        <div className="contact-notes">
          <div className="contact-notes-p-container">
            <p>Pick Up contact details</p>
          </div>
          <div className="checkbox-container-in-payment">
            <input
              type="checkbox"
              className="checkbox-input"
              id="use-same-details"
            />
            <label for="use-same-details" className="ml-2 mt-1">
              use the same details for drop off
            </label>
          </div>
        </div>
        <div className="name-input-container">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="name-input"
            value={this.state.name}
            onChange={this.onChange('name')}
          />
          <img src={name} alt="" className="name-image" />
        </div>
        <div className="email-and-tel-container">
          <input
            type="email"
            placeholder="people@gmail.com"
            className="email-input"
            value={this.state.email}
            onChange={this.onChange('email')}
          />
          <img src={email} alt="" className="email-image" />
          {/* <div className="inline div-inline"> */}
          <input
            type="tel"
            placeholder="+633-223-2327"
            className="tel-input"
            value={this.state.phone}
            onChange={this.onChange('phone')}
          />
          <img src={tel} alt="" className="tel-image" />
          {/* </div> */}
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
}

export class Date extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: { min: 2, max: 10 },
      selectedOption: null,
      options: options,
    }
  }

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption,
    })
    if (selectedOption.value === '3') {
      this.setState({
        options: optionsUrgently,
      })
    }
    if (selectedOption.value === '2') {
      this.setState({
        options: optionsCalendar,
      })
    }
  }

  onClick(el) {
    el.target.style.color = '#000000'
    if (el.target.selectedIndex === 2) {
      const calender = document.createElement('input')
      calender.setAttribute('type', 'date')
      el.target.parentNode.appendChild(calender)
      console.log(el.target)
      return (
        <div>
          <input type="date" />
        </div>
      )
    }
  }

  render() {
    const { selectedOption } = this.state

    return (
      <div className="date-container">
        <div className="date-container__h5-container">
          <h5>Select date & time</h5>
        </div>
        <div className="select-date-container">
          <Select
            className="select-date"
            // onClick={this.onClick}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
            placeholder="Choose Date Pickup"
          >
            {/* <option
							value=""
							disabled
							selected
							hidden
							className="placeholder-option"
						>
							Choose Date Pickup
						</option>
						<option value="1">Within one week</option>
						<option value="2">On a Fixed Date</option>
						<option value="3">Urgently</option>
						<option value="4">Between dates</option>
						<option value="5">I'm flexible</option>
						<option value="6">Don't have a date yet</option> */}
          </Select>
        </div>
        <div className="time-range-container">
          <h5>Time range to pickup</h5>
          <InputRange
            formatLabel={(value) => ``}
            maxValue={14}
            minValue={0}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
          />
          <hr className="hairline-one hairline-big" color="#DDDDDD" />
          <hr className="hairline-two hairline-small" color="#DDDDDD" />
          <hr className="hairline-three hairline-big" color="#DDDDDD" />
          <hr className="hairline-four hairline-small" color="#DDDDDD" />
          <hr className="hairline-five hairline-big" color="#DDDDDD" />
          <hr className="hairline-six hairline-small" color="#DDDDDD" />
          <hr className="hairline-seven hairline-big" color="#DDDDDD" />
          <hr className="hairline-eight hairline-small" color="#DDDDDD" />
          <hr className="hairline-nine hairline-big" color="#DDDDDD" />
          <hr className="hairline-ten hairline-small" color="#DDDDDD" />
          <hr className="hairline-eleven hairline-big" color="#DDDDDD" />
          <hr className="hairline-twelve hairline-small" color="#DDDDDD" />
          <hr className="hairline-thirteen hairline-big" color="#DDDDDD" />
          <hr className="hairline-fourteen hairline-small" color="#DDDDDD" />
          <hr className="hairline-fifteen hairline-big" color="#DDDDDD" />
          <p className="time-line">
            <span>6am</span>
            <span>8am</span>
            <span>10am</span>
            <span>12am</span>
            <span>2pm</span>
            <span>4pm</span>
            <span>6pm</span>
            <span>8pm</span>
          </p>
          <p className="note">*Set a wider time interval to minimize costs.</p>
        </div>
      </div>
    )
  }
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
      <div className="additional-information-container">
        <div className="additional-information-container__header">
          <div>
            <h3>Additional Information</h3>
          </div>
          <div>
            <p>
              Сurrently Price <span>£82</span>
            </p>
          </div>
        </div>
        <div>
          <div className="select-additional-service-container d-flex flex-wrap">
            <div className="col-md-6 col-xs-12 p-0 px-md-2">
              <div className="service-container">
                <div>
                  <h6>Packing Services</h6>
                  <p>Packing your goods &#8226;</p>
                </div>
                <div>
                  <div class="container">
                    <input
                      type="checkbox"
                      id="toggle-button"
                      class="toggle-button"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 p-0 px-md-2">
              <div className="service-container ">
                <div>
                  <h6>Resembling</h6>
                  <p>Driver help with loading &#8226;</p>
                </div>
                <div>
                  <div class="container">
                    <input
                      type="checkbox"
                      id="toggle-button"
                      class="toggle-button"
                    />
                  </div>
                </div>
              </div>

              <div className="service-container">
                <div className="">
                  <h6>Free Removal Boxes</h6>
                  <p>Free Removal Boxes &#8226;</p>
                </div>
                <div>
                <div class="container">
                  <input
                    type="checkbox"
                    id="toggle-button"
                    class="toggle-button"
                  />
                </div>
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
        <div className="btns-container mt-4">
          <div className="back-btn-container">
            <img
              src={arrowBack}
              alt=""
              width="16"
              height="16"
              className="indentation"
            />
            <p className="back_text">Back</p>
          </div>
          {/* "/get-price" */}
          <Link to={this.props.yesComplete()} className="next-btn-container">
            <p className="indentation mt-2">GET PRICES</p>
            <img src={arrow} alt="" width="16" height="16" />
          </Link>
        </div>
      </div>
    )
  }
}

class PickDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yesComplete: '#',
    }
  }
  isComplete = () => {
    this.setState({ yesComplete: '/get-price' })
  }
  isNotComplete = () => {
    this.setState({ yesComplete: '#' })
  }
  getComplete = () => {
    return this.state.yesComplete
  }
  render() {
    return (
      <div className="third-step-container">
        <AsidePanel
          first="✓"
          second="✓"
          third="3"
          fourth="4"
          colorFirst="#8EAD28"
          colorSecond="#8EAD28"
          colorThird="#E0E0E0"
          classNameFirst="circle"
          classNameSecond="circle"
          classNameThird="circle"
          classNameFourth="circle passive"
        />
        <div className="date-and-additional-info-container">
          <div className="contact-and-date-container">
            <Contact
              isComplete={this.isComplete}
              isNotComplete={this.isNotComplete}
            />
            <Date />
          </div>
          <AdditionalInformation yesComplete={this.getComplete} />
        </div>
      </div>
    )
  }
}

export default PickDate
