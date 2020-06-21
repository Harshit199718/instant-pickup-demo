import React, {useState} from 'react';
import './wedo.scss';

import van from '../../../content-constants/images/vanicon.png';
import currency from '../../../content-constants/images/currency.png';
import iphone from '../../../content-constants/images/iphone.svg';
import steps from '../../../content-constants/images/steps.gif';
import location from '../../../content-constants/images/location.png';
import clock from '../../../content-constants/images/clock.png';

const WeDoBlock = () => {
	const [img, setImg] = useState(window.innerWidth<768?steps:iphone)

	React.useEffect(() => {
		function handleResize() {
		  window.innerWidth<=768?setImg(steps):setImg(iphone)
		}
		window.addEventListener('resize', handleResize)
	  },[])
    return (
			<div className="we-do-block-container">
				<div>
					<h2 className="what-we-do-text">
						What we do: Instant pickup we provide eco-friendly removable vans
					</h2>
				</div>
				<div className="algorithm-container">
					<div className="algorithm-container__first-block">
						<div className="algorithm-container__advice-container">
							<div className="algorithm-container__advice-container__img">
								<img src={van} alt="" />
							</div>
							<div>
								<h3>Select a Van:</h3>
								<p>
									We have a variety of vans to choose from in order to suit your
									needs.
								</p>
							</div>
						</div>
						<div className="algorithm-container__advice-container margin-price-container">
							<div className="algorithm-container__advice-container__img">
								<img src={currency} alt="" />
							</div>
							<div className="for-margin">
								<h3>Instant Price:</h3>
								<p>
									Get an instant estimated charge without the hassle of getting
									various quotations on your email.
								</p>
							</div>
						</div>
					</div>
					<div className="algorithm-container__second-block">
						{/* <div className="details">
							<ul className="we-do-list">
								<li>Enter Your Destination</li>
								<li>Select the Van Size You Need</li>
								<li>Enter Your Pickup Date and Time</li>
								<li>Select Your Payment Method</li>
								<li>Review Your Booking</li>
								<li>Place Your Order</li>
							</ul>
						</div> */}
						<img src={img} alt="" />
					</div>
					<div className="algorithm-container__third-block">
						<div className="algorithm-container__advice-container">
							<div className="algorithm-container__advice-container__img">
								<img src={location} alt="" />
							</div>
							<div>
								<h3>Enter Location:</h3>
								<p>Pick up and drop off location is all you need to provide.</p>
							</div>
						</div>
						<div className="algorithm-container__advice-container margin-time-container">
							<div className="algorithm-container__advice-container__img">
								<img src={clock} alt="" />
							</div>
							<div className="for-margin">
								<h3>Schedule pickup time:</h3>
								<p>
									Have the ability to schedule your pickup time and location.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default WeDoBlock;