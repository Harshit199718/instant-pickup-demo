import React, { Fragment } from 'react';
import './about-us.scss';

import arrowtop from '../../../content-constants/images/arrowtop.png';

const AboutUs = (props) => {
    return (
			<Fragment>
				<div className="about-us-container">
					<div className="about-us-container__container" 
					style=
					{props.width && props.margin?
					{width:`${props.width}`,
					marginLeft:`${props.margin}`}
					:null}
					>
						<div className="link-container-container">
							<div className="link-container">
								<a href="#top">
									<img src={arrowtop} alt="" />
								</a>
							</div>
						</div>
						<div>
							<h3 className="about-us-h3-text">About Us</h3>
						</div>
						<div className="info-about-us">
							<div className="about-us-advantages">
								<p>
									Instant Pickup is the first online platform that connects
									drivers of sustainable vans (who we refer to as partners) to
									people who need their services, using a simplified quotation
									process. Currently in the UK over 1.1 million residential
									property transactions take place annually but they are unable
									to find any online platforms where they can get access to eco-
									friendly removal vans.
								</p>
							</div>
							<div className="about-us-more-info discover-container">
								<h5>Discover</h5>
								<p>About Us</p>
								<p>FAQ</p>
								<p>Quotation</p>
								<p>Contacts</p>
								<p>Terms and condition</p>
							</div>
							<div className="about-us-more-info">
								<h5>Contacts</h5>
								<p>
									Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX
								</p>
								<p>+08 000 016 520 / <span>+02 071 014 591</span></p>
								<p>info@instantpickup.delivery</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className='social-icons'>
						<i class="fa fa-twitter" aria-hidden="true"></i>
						<i class="fa fa-linkedin" aria-hidden="true"></i>
						<i class="fa fa-facebook" aria-hidden="true"></i>
						<i class="fa fa-instagram" aria-hidden="true"></i>
					</div>
					<div className='rights-text-container'>
						<p>© Removals 2020 - All rights reserved.</p>
					</div>
				</div>
			</Fragment>
		);
}

export default AboutUs;
