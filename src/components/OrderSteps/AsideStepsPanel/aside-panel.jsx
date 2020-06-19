import React from 'react'
import './aside-panel.scss'

const AsidePanel = (props) => {
  return (
    <div className="steps-line-container">
      <h5>YOUR STEP</h5>

      <div className="numbers-container">
        <hr className="hr-sm"/>
        <div className="one-step-container">
          <div className={props.classNameFirst}>
            <p>{props.first}</p>
            <hr className="hr" color={props.colorFirst} />
          </div>
          <h5>Select Property</h5>
        </div>
        <div className="one-step-container">
          <div className={props.classNameSecond}>
            <p>{props.second}</p>
            <hr className="hr" color={props.colorSecond} />
          </div>
          <h5>Select Inventory</h5>
        </div>
        <div className="one-step-container">
          <div className={props.classNameThird}>
            <p>{props.third}</p>
            <hr className="hr" color={props.colorThird} />
          </div>
          <h5>Pick Your Date</h5>
        </div>
        <div className="one-step-container">
          <div className={props.classNameFourth}>
            <p>{props.fourth}</p>
          </div>
          <h5>Get Prices</h5>
        </div>
      </div>
    </div>
  )
}

export default AsidePanel
