import React, { Component } from 'react';
import './secondstep.scss';

import AsidePanel from '../AsideStepsPanel';
import FurnitureAmount from './FurnitureAmount';

const SelectInventory = () => {
    return (
			<div className="second-step-container">
				<AsidePanel
					first="✓"
					second="2"
					third="3"
					fourth="4"
					colorFirst="#8EAD28"
					colorSecond="#E0E0E0"
					colorThird="#E0E0E0"
					classNameFirst="circle"
					classNameSecond="circle"
					classNameThird="circle passive"
					classNameFourth="circle passive"
				/>
				<FurnitureAmount/>
			</div>
		);
}

export default SelectInventory;