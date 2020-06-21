import React from 'react'
import './main-page.scss'

import OrderArea from './StartingOrderArea'
import Carousel from './FeedbackCarousel'
import WeDoBlock from './WhatWeDoBlock'
import OurMission from './OurMission'
import OurServices from './OurServices'
import OurCities from './OurCities'
import AboutUs from './AboutUs'

import car from '../../content-constants/images/scroll-car.png'

const MainPage = () => {
  return (
    <div className="main-page">
      <div>
        <div>
          <OrderArea />
        </div>
        <div className="circles-container">
          <div className="big-circle"></div>
          <div className="little-circle"></div>
        </div>
        <div className="side-line">
        <div className="car-sm">
          <img src={car} height="151" id="car" alt="" />
        </div>
        </div>
        <div className="car">
          <img src={car} height="151" id="car" alt="" />
        </div>
        <div>
          <Carousel />
        </div>
        <div className="circles-container circle-second">
          <div className="big-circle"></div>
          <div className="little-circle"></div>
        </div>
        <div>
          <WeDoBlock />
        </div>
        <div className="circles-container circle-third">
          <div className="big-circle"></div>
          <div className="little-circle"></div>
        </div>
        <div id="mission">
          <OurMission />
        </div>
        <div className="circles-container circle-four">
          <div className="big-circle"></div>
          <div className="little-circle"></div>
        </div>
        <div>
          <OurCities />
        </div>
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
    </div>
  )
}

export default MainPage
