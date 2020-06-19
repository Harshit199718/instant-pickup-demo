import React from 'react'
import './form.scss'

import locationimg from '../../../content-constants/images/location_on.png'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      floor: '',
      property: '',
    }
  }
  onChange = (name) => (e) => {
    // const { name, email, phone } = this.state
    this.setState({ [name]: e.target.value }, () => {
      if (this.state.floor !== '' && this.state.property !== '') {
        this.props.isComp()
      }
    })
  }
  onClick(el) {
    el.target.style.color = '#000000'
  }
  render() {
    return (
      <div className="form">
        <div className="point-type">
          <h2>{this.props.name}</h2>
          <div className="address-container">
            <img src={locationimg} alt="location-img" width="10" height="15" />
            <p>{this.props.address}</p>
          </div>
        </div>
        <div>
          <div className="select-container">
            <p>Property</p>
            <select
              onClick={this.onClick}
              value={this.state.property}
              onChange={this.onChange('property')}
            >
              <option value="" disabled selected hidden>
                Choose property
              </option>
              <option value="Room">Room</option>
              <option value="Storage">Storage</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="select-container">
            <p>Floor Level</p>
            <select
              onClick={this.onClick}
              value={this.state.floor}
              onChange={this.onChange('floor')}
            >
              <option value="" disabled selected hidden>
                Choose property
              </option>
              <option value="Basement">Basement</option>
              <option value="Ground floor">Ground floor</option>
              <option value="1st floor">1st floor</option>
              <option value="2nd floor">2nd floor</option>
              <option value="3rd floor">3rd floor</option>
              <option value="Above 3rd floor">Above 3rd floor</option>
            </select>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="checkbox" /> <p>Lift Available</p>
        </div>
      </div>
    )
  }
}

export default Form
