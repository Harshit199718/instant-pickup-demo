import React, { Component, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './furniture-amount.scss'
import { useDropzone } from 'react-dropzone'

import Slider from 'react-slick'

import living from '../../../../content-constants/images/living.png'
import dining from '../../../../content-constants/images/dining.png'
import kitchen from '../../../../content-constants/images/kitchen.png'
import office from '../../../../content-constants/images/office.png'
import bedrooms from '../../../../content-constants/images/bedroom.jpg'
import bathroom from '../../../../content-constants/images/toilet.jpg'
import garden from '../../../../content-constants/images/garden.jpg'
import boxes from '../../../../content-constants/images/boxes.jpg'
import addAPhoto from '../../../../content-constants/images/add_a_photo.png'
import arrowBack from '../../../../content-constants/images/arrow_back.png'
import arrow from '../../../../content-constants/images/arrow.png'

const itemsData = [
  {
    id: 0,
    name: 'Living room',
    items: {
      one: '2 seater sofa',
      two: '3 seater sofa',
      three: 'Armchair',
      four: 'Coffee table',
      five: 'TV',
      six: 'TV Unit',
      seven: 'Side Tables',
      eight: 'Book case',
    },
  },
  {
    id: 1,
    name: 'Dining room',
    items: {
      one: 'Dining Table - 6 person',
      two: 'Dining Table - 8/10 person',
      three: 'Dining Chairs',
      four: 'Cabinet Dresser',
      five: 'Display Unit',
      six: 'Side Board',
      seven: 'Rug',
    },
  },
  {
    id: 2,
    name: 'Kitchen',
    items: {
      one: 'Kitchen Table',
      two: 'Chairs',
      three: 'Fridge',
      four: 'Fridge Freezer',
      five: 'Tumble Dryer',
      six: 'Washing Machine',
      seven: 'Oven',
      eight: 'Microwave',
    },
  },
  {
    id: 3,
    name: 'Office',
    items: {
      one: 'Desk',
      two: 'Office Chair',
      three: 'Pedestal',
      four: 'Filing Cabinet',
      five: 'Desktop computer',
      six: 'Printer',
    },
  },
  {
    id: 4,
    name: 'Bedrooms',
    items: {
      one: 'Kingsize Bed',
      two: 'Double Bed',
      three: 'Single Bed',
      four: 'Bedside Tables',
      five: 'Chest of Drawers',
      six: 'Wardrobe',
      seven: 'Dressing Table',
      eight: 'Mirror',
    },
  },
  {
    id: 5,
    name: 'Bathroom & Toilet',
    items: {
      one: 'Bathroom Cabinet',
      two: 'Storage units',
      three: 'Mirror',
      four: 'Bath',
      five: 'Sink',
      six: 'Rug',
    },
  },
  {
    id: 6,
    name: 'Garden & Shed',
    items: {
      one: 'Garden table',
      two: 'Chairs',
      three: 'Bench',
      four: 'Bath',
      five: 'Parasol',
      six: 'Lawn mower',
      seven: 'Barbecue',
      eight: 'Bicycle',
    },
  },
  {
    id: 7,
    name: 'Boxes & Others',
    items: {
      one: 'Extra Large Boxes',
      two: 'Large Boxes',
      three: 'Medium Boxes',
      four: 'Small Boxes',
      five: 'Artwork',
      six: 'Bicycle',
      seven: 'Suitcase',
      eight: 'Pool Table',
    },
  },
]

class RoomItems extends Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		value: 0,
  // 	};
  // }

  onClickAdd = (el) => {
    const val = el.target.parentNode.previousSibling.firstChild
    // if (this.state.value < 101) {
    // 	this.setState({
    // 		value: this.state.value + 1,
    // 	});
    // }
    if (val.value < 101) {
      val.value = Number(val.value) + 1
    }
  }

  onClickRemove = (el) => {
    const val = el.target.parentNode.nextSibling.firstChild
    // if (this.state.value > 0) {
    // 	this.setState({
    // 	value: this.state.value - 1,
    // 	});
    // }
    if (val.value > 0) {
      val.value = Number(val.value) - 1
    }
  }

  onClickInput = (event) => {
    // this.setState({
    // 	value: event.target.value,
    // });
    const val = event.target
    val.value = event.target.value
  }

  clearValue = () => {
    const inputsArray = document.getElementsByTagName('input')
    for (let i = 0; i < inputsArray.length; i++) {
      inputsArray[i].value = ''
    }
  }

  render() {
    // this.clearValue();

    return (
      <div className="room mb-4">
        <div>
          <h3>{this.props.name}</h3>
        </div>
        {this.props.number.map((card) => (
          <div className="item-amount">
            <label htmlFor="" className="item-amount__label">
              {card}
            </label>
            <div className="buttons-container">
              <div className="remove-btn-container">
                <button
                  className="buttons-container__btn remove-btn"
                  onClick={this.onClickRemove}
                ></button>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0"
                  defaultValue="0"
                  className="buttons-container__input"
                  onChange={this.onClickInput}
                />
              </div>
              <div className="add-btn-container">
                <button
                  className="buttons-container__btn add-btn"
                  onClick={this.onClickAdd}
                ></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const First = () => {
  const onClickAdd = (el) => {
    const val = el.target.parentNode.previousSibling.firstChild

    if (val.value < 101) {
      val.value = Number(val.value) + 1
    }
  }

  const onClickRemove = (el) => {
    const val = el.target.parentNode.nextSibling.firstChild

    if (val.value > 0) {
      val.value = Number(val.value) - 1
    }
  }

  const onClickInput = (event) => {
    const val = event.target
    val.value = event.target.value
  }

  return (
    <div className="room">
      <div>
        <h3>{itemsData[0].name}</h3>
      </div>
      {Object.values(itemsData[0].items).map((card) => (
        <div className="item-amount">
          <label htmlFor="" className="item-amount__label">
            {card}
          </label>
          <div className="buttons-container">
            <div className="remove-btn-container">
              <button
                className="buttons-container__btn remove-btn"
                onClick={onClickRemove}
              ></button>
            </div>
            <div>
              <input
                type="number"
                min="0"
                max="100"
                step="0"
                defaultValue="0"
                className="buttons-container__input"
                onChange={onClickInput}
              />
            </div>
            <div className="add-btn-container">
              <button
                className="buttons-container__btn add-btn"
                onClick={onClickAdd}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Second = () => {
  const onClickAdd = (el) => {
    const val = el.target.parentNode.previousSibling.firstChild

    if (val.value < 101) {
      val.value = Number(val.value) + 1
    }
  }

  const onClickRemove = (el) => {
    const val = el.target.parentNode.nextSibling.firstChild

    if (val.value > 0) {
      val.value = Number(val.value) - 1
    }
  }

  const onClickInput = (event) => {
    const val = event.target
    val.value = event.target.value
  }

  return (
    <div className="room">
      <div>
        <h3>{itemsData[1].name}</h3>
      </div>
      {Object.values(itemsData[1].items).map((card) => (
        <div className="item-amount">
          <label htmlFor="" className="item-amount__label">
            {card}
          </label>
          <div className="buttons-container">
            <div className="remove-btn-container">
              <button
                className="buttons-container__btn remove-btn"
                onClick={onClickRemove}
              ></button>
            </div>
            <div>
              <input
                type="number"
                min="0"
                max="100"
                step="0"
                defaultValue="0"
                className="buttons-container__input"
                onChange={onClickInput}
              />
            </div>
            <div className="add-btn-container">
              <button
                className="buttons-container__btn add-btn"
                onClick={onClickAdd}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

class RoomSecondVariant extends Component {
  render() {
    if (this.props.active === 0) {
      return <First />
    } else {
      return <Second />
    }
  }
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
      beforeChange: this.props.beforeChange,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="variant-container">
            <img src={living} alt="living room" />
            <p>Living Room</p>
          </div>
          <div className="variant-container">
            <img src={dining} alt="dining room" />
            <p>Dining Room</p>
          </div>
          <div className="variant-container">
            <img src={kitchen} alt="kitchen" />
            <p>Kitchen</p>
          </div>
          <div className="variant-container">
            <img src={office} alt="office" />
            <p>Office</p>
          </div>
          <div className="variant-container">
            <img src={bedrooms} alt="bedroom" width="106" height="91" />
            <p>Bedrooms</p>
          </div>
          <div className="variant-container">
            <img src={bathroom} alt="bathroom" width="106" height="91" />
            <p>Bathrooms&Toilets</p>
          </div>
          <div className="variant-container">
            <img src={garden} alt="garden" width="106" height="91" />
            <p>Garden&Shed</p>
          </div>
          <div className="variant-container">
            <img src={boxes} alt="boxes" width="106" height="91" />
            <p>Boxes&Others</p>
          </div>
        </Slider>
      </div>
    )
  }
}

function MyDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <section className="container-drop-zone">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img src={addAPhoto} />
        <p className="drop-zone-text">Browse file or drag here</p>
      </div>
      <aside>
        {/* <h4>Files</h4> */}
        <p>{files}</p>
      </aside>
    </section>
  )
}

class FurnitureAmount extends Component {
  state = {
    active: 0,
  }

  beforeChange = (oldIndex, newIndex) => {
    this.setState({ active: newIndex })
  }

  render() {
    return (
      <div className="furniture-details-container">
        <div>
          <SimpleSlider beforeChange={this.beforeChange} />
        </div>
        <div className="room-and-add-photo-container">
          <RoomItems
            name={itemsData[this.state.active].name}
            number={Object.values(itemsData[this.state.active].items)}
          />
          {/* <RoomSecondVariant active={this.state.active}/> */}
          <div className="add-photo-container text-left">
            <div>
              <h3>Add Photo Attachments</h3>
            </div>
            <div className="text-center">
              <MyDropzone />
            </div>
            <div className="textarea-container ">
              <textarea
                placeholder="Enter any your additional item"
                rows="6"
                cols="50"
              ></textarea>
              <hr color="#DDDDDD" className="line" />
            </div>
            <div className="btns-container">
              <Link to="/select-property" className="back-btn-container d-md-block">
                <img
                  src={arrowBack}
                  alt=""
                  width="16"
                  height="16"
                  className="indentation"
                />
                <p className="back_text">Back</p>
              </Link>
              <Link to="/pick-date" className="next-btn-container">
                <p className="indentation mt-2">NEXT STEP</p>
                <img src={arrow} alt="" width="16" height="16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FurnitureAmount
