import React from 'react';
import './our-cities.scss';

const OurCities = () => {
    return (
			<div className="our-cities-container">
				<div className="our-cities-container__h2-container">
					<h2>Our Cities</h2>
				</div>
				<div className="our-cities-hours">
					<h5>Service hours in London:</h5>
					<p>Monday to Thursday: <span>5 am to 4 am</span></p>
					<hr className="our-cities-line"/>
					<p>Friday 5 am to Monday 4 am: <span> non-stop</span></p>
				</div>
			</div>
		);
}

export default OurCities;