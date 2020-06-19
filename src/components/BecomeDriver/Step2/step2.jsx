import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './step2.scss'

import arrowBack from '../../../content-constants/images/arrow_back.png'
import drivFace from '../../../content-constants/images/driv_face.png'
import upload from '../../../content-constants/images/upload.png'
import idid from '../../../content-constants/images/id.png'
import drive from '../../../content-constants/images/drive.png'
import insurance from '../../../content-constants/images/insurance.png'
import bill from '../../../content-constants/images/bill.png'
import AboutUs from '../../MainPage/AboutUs'

export default class BDTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      u1: '',
      u2: '',
      u3: '',
      u4: '',
      u5: '',
      u6: '',
      proceed: false,
      nextLink: '#',
    }
  }
  onChange = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => {
      if (
        this.state.u1 !== '' &&
        this.state.u2 !== '' &&
        this.state.u3 !== '' &&
        this.state.u4 !== '' &&
        this.state.u5 !== '' &&
        this.state.u6 !== ''
      ) {
        this.setState({ proceed: true })
        this.setState({ nextLink: '/' })
      }
    })
  }
  render() {
    return (
      <div>
        <div className="bd-step-two-container container text-left">
          <div>
            <h2 className="become-a-partner">My Dashboard</h2>
          </div>
          <div className="row mb-4">
            {/* <img src={drivFace} alt="" className="drivf" /> */}
            <p className="upload-docs-1">
              Upload your documents to start making money
              <br />
              <span className="upload-docs-2">
                We require all of our transport partners to submit these
                documents to verify your account information
              </span>
            </p>
          </div>
        </div>
        <div className="row justify-content-around mb-6 my-row">
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={idid} alt="" />
              </div>
              <h6>UK driver license or EU ID*</h6>

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-1">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-1"
                  value={this.state.u1}
                  onChange={this.onChange('u1')}
                />
              </div>
            </div>
          </div>
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={drive} alt="" />
              </div>
              <h6>Commercial Van Insurance* </h6>

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-2">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-2"
                  value={this.state.u2}
                  onChange={this.onChange('u2')}
                />
              </div>
            </div>
          </div>
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={insurance} alt="" />
              </div>
              <h6>Goods in Transit Insurance*</h6>

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-3">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-3"
                  value={this.state.u3}
                  onChange={this.onChange('u3')}
                />
              </div>
            </div>
          </div>
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={idid} alt="" />
              </div>
              <h6>Utility Bill 1*</h6>
              <br />

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-4">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-4"
                  value={this.state.u4}
                  onChange={this.onChange('u4')}
                />
              </div>
            </div>
          </div>
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={bill} alt="" />
              </div>
              <h6>Utility Bill 2*</h6>
              <br />

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-5">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-5"
                  value={this.state.u5}
                  onChange={this.onChange('u5')}
                />
              </div>
            </div>
          </div>
          <div className="my-col col-6 col-md-4 flex-1">

            <div className="container req-box">
              <div className="req-img">
                <img src={insurance} alt="" />
              </div>
              <h6>Public Liability Insurance*</h6>

              <span className="small learnm ">learn more</span>
              <div className="custom-file mt-2">
                <label for="upload-6">
                  Upload{' '}
                  <img
                    src={upload}
                    style={{ height: '21.69px', marginLeft: '1em' }}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  accept="application/pdf,.doc,.docx,application/msword"
                  name="photo"
                  id="upload-6"
                  value={this.state.u6}
                  onChange={this.onChange('u6')}
                />
              </div>
            </div>
          </div>
        </div>
        {/* after-flex */}
        <div className="text-left container">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="nonUKaddr"
            />
            <label class="form-check-label ml-3" for="nonUKaddr">
              I have motor trade insurance
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="nonUKaddr"
            />
            <label class="form-check-label ml-3" for="nonUKaddr">
              I am VAT registered
            </label>
          </div>
          <div>
            Need help with your documents? Email us at{' '}
            <span className="partner-hyperlink">
              info@instantpickup.delivery
            </span>
          </div>
          <div className="back-btn-container become-partner-2-back-btn">
            <Link to={'/become-a-partner-step-one'}>
              <img
                src={arrowBack}
                alt=""
                width="16"
                height="16"
                className="indentation"
              />
              <span className="text-muted">Back</span>
            </Link>

            <div className="applcn-btn pt-md-3 pl-md-3 mx-auto last-appln-btn subdoc-appln-btn">
              <Link
                to={this.state.nextLink}
                onClick={() => {
                  if (!this.state.proceed) {
                    alert('Please upload all the documents!')
                  }
                }}
              >
                SUBMIT DOCUMENTS
              </Link>
            </div>
          </div>
        </div>
        <AboutUs/>
      </div>
    )
  }
}
