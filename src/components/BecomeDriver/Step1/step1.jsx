import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './step1.scss'

import arrowBack from '../../../content-constants/images/arrow_back.png'
import driv1 from '../../../content-constants/images/be_a_driv.jpg'
import edit from '../../../content-constants/images/edit.png'
import AboutUs from '../../MainPage/AboutUs'
export default class  BDOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      pwd: '',
      confirm: '',
      email: '',
      phone: '',
      line1: '',
      line2: '',
      city: '',
      country: '',
      proceed: false,
      nextLink: '#',
    }
  }
  onChange = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => {
      if (
        this.state.fname !== '' &&
        this.state.lname !== '' &&
        this.state.pwd !== '' &&
        this.state.confirm === this.state.pwd &&
        this.state.email !== '' &&
        this.state.phone !== '' &&
        this.state.city !== '' &&
        this.state.country !== '' &&
        this.state.line1 !== '' &&
        this.state.line2 !== ''
      ) {
        this.setState({ proceed: true })
        this.setState({ nextLink: '/become-a-partner-step-two' })
      } else {
        this.setState({ proceed: false })
        this.setState({ nextLink: '#' })
      }
    })
  }
  render() {
    return (
      <div>
        <div className="bd-step-one-container">
          <h2 className="become-a-partner">Become A Partner</h2>
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="driver-bio-form ">
                <form className="border text-left pl-3 pr-3 pl-md-4 pr-md-4 pt-2 dbf-1">
                  <h6>
                    Your Details<span style={{ color: 'red' }}> *</span>
                  </h6>
                  <div className="row m-0">
                    <div className="col-12 col-md-6 mb-2 mb-md-4 pl-0 pr-0 pr-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={this.state.fname}
                        onChange={this.onChange('fname')}
                      />
                    </div>
                    <div class="col-12 col-md-6 px-0 my-2 mb-4 my-md-0 mb-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={this.state.lname}
                        onChange={this.onChange('lname')}
                      />
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business name"
                      />
                    </div>
                  </div> */}
                </form>
              </div>
              <div className="driver-bio-form ">
                <div className=" border pl-3 pr-3 pt-2 text-left">
                  <div className="form-head">
                    <div className="row m-0">
                      <div className="col-md-6 p-0">
                        <h6>
                          Home Address <span style={{ color: 'red' }}> *</span>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="form-row mb-2 mt-2">
                    <div className="col-12 col-md-6 driver-form-field">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Address Line 1"
                        value={this.state.line1}
                        onChange={this.onChange('line1')}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-2 mt-2">
                    <div className="col-12 col-md-6 driver-form-field">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Address Line 2"
                      />
                    </div>
                  </div>
                  <div className="form-row mb-2 mt-2">
                    <div className="col-12 col-md-6 driver-form-field">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="City"
                        value={this.state.city}
                        onChange={this.onChange('city')}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-2 mt-2">
                    <div className="col-12 col-md-6 driver-form-field">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Country"
                        value={this.state.country}
                        onChange={this.onChange('country')}
                      />
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="nonUKaddr"
                    />
                    <label class="form-check-label ml-2 ml-md-3" for="nonUKaddr">
                      I have a non UK address
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="addrBsep"
                    />
                    <label class="form-check-label ml-2 ml-md-3" for="addrBsep">
                      I have a separate business address
                    </label>
                  </div>
                </div>
              </div>
              <div className="driver-bio-form ">
                <form className=" border text-left pl-4 pr-4 pt-2">
                  <h6>
                    Contact Details <span style={{ color: 'red' }}> *</span>
                  </h6>
                  <div className="row m-0">
                    <div className="col-12 col-md-6 mb-2 mb-md-4 pl-0 pr-0 pr-md-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.pwd}
                        onChange={this.onChange('pwd')}
                      />
                    </div>
                    <div class="col-12 col-md-6 my-2 my-md-0 mb-md-4 pl-0 pr-0 pr-md-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={this.state.confirm}
                        onChange={this.onChange('confirm')}
                      />
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-12 col-md-6 my-2 my-md-0 pl-0 pr-0 pr-md-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.onChange('email')}
                      />
                    </div>
                    <div class="col-12 col-md-6 my-2 my-md-0 pl-0 pr-0 pr-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.onChange('phone')}
                      />
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="policyread"
                    />
                    <label class="form-check-label ml-2 ml-md-3" for="policyread">
                      Please check the box to confirm that you have read and
                      understood{' '}
                      <span className="partner-hyperlink">
                        Instant Pickup Partner Privacy Policy
                      </span>
                    </label>
                  </div>
                </form>
              </div>
              <div className="back-btn-container pl-0 pl-md-3">
                <Link to={'/become-a-partner'} className='d-none d-md-inline-block'>
                  <img
                    src={arrowBack}
                    alt=""
                    width="16"
                    height="16"
                    className="indentation"
                  />
                  <span className="text-muted">Back</span>
                </Link>

                <div className="applcn-btn pt-3  mx-auto last-appln-btn">
                  <Link
                    to={this.state.nextLink}
                    onClick={() => {
                      if (this.state.pwd !== this.state.confirm) {
                        alert('Passwords do not match!')
                      } else if (!this.state.proceed) {
                        alert('Please fill all the fields')
                      }
                    }}
                  >
                    CONFIRM
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3 bd-one-card-container mb-5 px-0">
              <div class="card bd-one-card text-left">
                <img src={driv1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text pt-0 pt-md-1">
                    <div className="row">
                      <div className="col-8 text-left">
                        <h6 className='py-0 py-md-2'>Documents Required</h6>
                      </div>
                    </div>
                    <div className="h6">Identity</div>
                    <div className="text-muted">
                      Driving Licence
                      <br />
                      2 x utility bills
                      <hr />
                    </div>
                    <div className="h6">Insurance</div>
                    <div className="text-muted">
                      Vehicle insurance {`(`}hire and reward{`)`}
                      <br />
                      goods in transit {`(`}minimum cover £ 10,000 for the
                      purpose of removals{`)`}
                      <br />
                      Public liability {`(`}minimum £ 1M{`)`}
                      <br />
                      Motor trade insurance {'('}where Applicable{')'}
                      <br />
                      CMR {'('} minimum £ 50,000 where Applicable{')'}
                    </div>
                    <hr />
                    <div className="h6">Other</div>
                    <div className="text-muted">VAT Certificate</div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <AboutUs width='100%' margin='10px' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
