import React from 'react';
import { Link } from 'react-router-dom';
import './our-mission.scss';

import palm from '../../../content-constants/images/palm.png';
import road from '../../../content-constants/images/road.png';
import street from '../../../content-constants/images/street.png';
import piggyBank from '../../../content-constants/images/piggy-bank.png';
import sansara from '../../../content-constants/images/sansara.png';

const OurMission = () => {
    return (
			<div className="our-mission-container">
				<div>
					<h2 className="our-mission-h2">
						Our mission: Together, we can make our cities liveable
					</h2>
				</div>
				<div>
					<div className="mission-desc-container">
						<div>
							<img src={palm} alt="" />
						</div>
						<div className="mission-desc-container__text-container">
							<h3>We minimize traffic</h3>
							<p>
								We plan to minimize traffic by being the only removal service
								that offers removal moving bundles for single and small items
								with passengers who have a similar intention.{' '}
								<Link to="/mission" className="read-more-link">
									Read more
								</Link>
							</p>
						</div>
					</div>
					<div className="mission-desc-container">
						<div className="mission-desc-container__text-container">
							<h3>We help you breathe better</h3>
							<p>
								We are the first online platform to come up with a fleet of
								electric, hydrogen, and CPG vans, with which we aim to combat
								the pollution caused by diesel vans.{' '}
								<Link to="/mission" className="read-more-link">
									Read more
								</Link>
							</p>
						</div>
						<div>
							<img src={road} alt="" />
						</div>
					</div>
					<div className="mission-desc-container">
						<div>
							<img src={street} alt="" />
						</div>
						<div className="mission-desc-container__text-container">
							<h3>We keep noises down</h3>
							<p>
								Instant pickup is the only removal company in the United Kingdom
								tackling noise pollution, as more than 100 million people are
								exposed to annoying traffic everyday.{' '}
								<Link to="/mission" className="read-more-link">
									Read more
								</Link>
							</p>
						</div>
					</div>
					<div className="mission-desc-container">
						<div className="mission-desc-container__text-container">
							<h3>We offer comfortable removal services that cost less!</h3>
							<p>
								We achieve our slogan of "Pay less but move Green" by taking
								advantage of our vans which are not charged for congestion
								and...{' '}
								<Link to="/mission" className="read-more-link">
									Read more
								</Link>
							</p>
						</div>
						<div>
							<img src={piggyBank} alt="" />
						</div>
					</div>
					<div className="mission-desc-container">
						<div className='sansara-image-container'>
							<img src={sansara} alt="" />
						</div>
						<div className="mission-desc-container__text-container">
							<h3>We encourage re-usability</h3>
							<p>
								We offer free useable bags and this replaces the use of single
								use plastic mattress cover, sofa covers as the most effective
								way to reduce waste is to not create it in the first place.
								Making a new product requires a lot...{' '}
								<Link to="/mission" className="read-more-link">
									Read more
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div>
					<h2 className='join-h2'>
						Join our family and to learn{' '}
						<Link className="read-more-link">more</Link> or get a{' '}
						<Link className="read-more-link">quotation</Link>
					</h2>
				</div>
			</div>
		);
}

export default OurMission;
