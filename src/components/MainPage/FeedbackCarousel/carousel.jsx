import React, { Component } from 'react'
import './carousel.scss'

import Slider from 'react-slick'

import photoOne from '../../../content-constants/images/photoone.png'
import photoTwo from '../../../content-constants/images/phototwo.png'
import photoThree from '../../../content-constants/images/photothree.png'
import star from '../../../content-constants/images/star.png'

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    }
    return (
      <Slider {...settings} className="slider-feedbacks">
        <div className="person-feedback-container border">
          <div>
            <p>
              “It’s incredible. I am completely blown away. I just can’t get
              enough of Instant pickup. I want to get a T-Shirt with Instant
              pickup on it so I can show it off to everyone.”
            </p>
          </div>
          <div className="photo-and-name-container">
            <div>
              <img src={photoOne} alt="" width="48" height="48" />
            </div>
            <div className="starts-container">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>Kelly Albie</p>
            </div>
          </div>
        </div>
        <div className="person-feedback-container border">
          <div>
            <p>
              "I STRONGLY recommend Instant pickup to EVERYONE interested in
              running a successful online business! Instant pickup is the real
              deal!"
            </p>
          </div>
          <div className="photo-and-name-container">
            <div>
              <img src={photoTwo} alt="" width="48" height="48" />
            </div>
            <div className="starts-container">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>Zack Hawkins</p>
            </div>
          </div>
        </div>
        <div className="person-feedback-container border ">
          <div>
            <p>
              "I use Instant pickup often. After using Instant pickup my
              business skyrocketed! Instant pickup has completely surpassed our
              expectations."
            </p>
          </div>
          <div className="photo-and-name-container">
            <div>
              <img src={photoThree} alt="" width="48" height="48" />
            </div>
            <div className="starts-container">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>Shane Russell</p>
            </div>
          </div>
        </div>
      </Slider>
    )
  }
}

export default Carousel
