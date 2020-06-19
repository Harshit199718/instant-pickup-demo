import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './payment.scss';

import {
	Elements,
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	CardElement,
	PaymentRequestButtonElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// import {
// 	pickupaddress,
// 	dropoffaddress,
// } from '../../MainPage/StartingOrderArea/order-area';

import pen from '../../../content-constants/images/edit.png';
import arrow from '../../../content-constants/images/arrow.png';
import call from '../../../content-constants/images/call.png';

const stripePromise = loadStripe('pk_test_vIseOCESZLefRJvn9l90O1Zn00MLlznZST');

// const CheckoutForm = () => {
// 	const [paymentRequest, setPaymentRequest] = useState(null);

// 	useEffect(() => {
// 		const paymentRequest = stripe.paymentRequest({
// 			country: 'GB',
// 			currency: 'gbp',
// 			total: {
// 				label: 'Demo total',
// 				amount: 1099,
// 			},
// 			requestPayerName: true,
// 			requestPayerEmail: true,
// 		});

// 		paymentRequest.canMakePayment().then((result) => {
// 			if (result) {
// 				setPaymentRequest(paymentRequest);
// 			}
// 		});

// 		 if (paymentRequest) {
// 				return <PaymentRequestButtonElement options={{ paymentRequest }} />;
// 			}
// 	}, []);

// 	return null;
// };

const MyCheckoutForm = () => {

    return (
			<div className="payment-container">
				{/* <div className="booking-details-container">
					<div className="location-details">
						<div className="booking-details-container__header">
							<h5>Booking Details</h5>
							<div className="edit-button edit-in-payment">
								<img src={pen} alt="pen" width="12" height="12" />
								<p>EDIT</p>
							</div>
						</div>
						<div className="pickup-and-dropoff-points-container points-in-payment">
							<div>
								<h6>From</h6>
								<p>{pickupaddress}</p>
							</div>
							<div className="pickup-and-dropoff-points-container__img-container">
								<img src={arrow} alt="" />
							</div>
							<div>
								<h6>To</h6>
								<p>{dropoffaddress}</p>
							</div>
						</div>
					</div>
					<div>
						<div className="contact-info-container__header">
							<div>
								<h6>Contact Info</h6>
							</div>
							<div className="checkbox-container-in-payment">
								<input type="checkbox" className="checkbox-input" />
								<p>Use my contact detail</p>
							</div>
						</div>
						<div className="email-and-address-container">
							<input type="email" placeholder="people@gmail.com" />
							<input type="tel" placeholder="+633-223-2327" />
						</div>
						<div className="address-info-container">
							<div>
								<h6 className="address-info-text">Address Info</h6>
							</div>
							<div className="checkbox-container-in-payment checkbox-container-address">
								<input type="checkbox" className="checkbox-input" />
								<p className="blue-text">
									The pickup address different from my address
								</p>
							</div>
						</div>
					</div>
				</div> */}
				<div className="payment-details-container">
					<div className="payment-details-container__header">
						<div className="payment-details-container__header__text-container">
							<h5>Payment Details</h5>
							<p className="payment-details-container__header__total-sum-text">
								Total Summary<span>£82</span>
							</p>
						</div>
						{/* <div className="edit-button edit-in-payment edit-padding">
							<img src={pen} alt="pen" width="12" height="12" />
							<p>EDIT</p>
						</div> */}
					</div>
					<div>
						{/* <div>
							<form action="" className="form-payment">
								<div className="payment-variant">
									<p>
										<input type="radio" name="payment" data-stripe="number" />
										Credit Card
									</p>
								</div>
								<div className="payment-variant">
									<p>
										<input type="radio" name="payment" />
										Paypal
									</p>
								</div>
							</form>
						</div> */}
						<div className="card-info-container">
							<div>
								<input
									type="text"
									placeholder="Cardholder Name"
									className="card-info name-info"
								/>
							</div>
							<div>
								{/* <input
									type="number"
									placeholder="Card Number"
									className="card-info"
									data-stripe="number"
								/> */}
								<CardNumberElement
									className="card-info"
									options={{
										style: {
											base: {
												fontSize: '16px',
												color: '#424770',
												'::placeholder': {
													color: '#DADADA',
												},
											},
											invalid: {
												color: '#9e2146',
											},
										},
									}}
								/>
							</div>
							<div className="expiration-date-and-cvv">
								<div className="expiration-date-and-cvv__input-container">
									{/* <input
										type="number"
										placeholder="Exp. Mon"
										data-stripe="number"
										data-stripe="exp_month"
									/> */}
								</div>
								<div className="expiration-date-and-cvv__input-container">
									{/* <input
										type="number"
										placeholder="Exp. Year"
										data-stripe="exp_year"
									/> */}
									<CardExpiryElement
										className="cvc-input"
										options={{
											style: {
												base: {
													fontSize: '16px',
													color: '#424770',
													'::placeholder': {
														color: '#DADADA',
													},
												},
												invalid: {
													color: '#9e2146',
												},
											},
										}}
									/>
								</div>
								<div className="expiration-date-and-cvv__input-container">
									{/* <input
										type="number"
										name=""
										id=""
										placeholder="CVV"
										data-stripe="cvc"
									/> */}
									<CardCvcElement
										className="cvc-input"
										options={{
											style: {
												base: {
													fontSize: '16px',
													color: '#424770',
													'::placeholder': {
														color: '#DADADA',
													},
												},
												invalid: {
													color: '#9e2146',
												},
											},
										}}
									/>
								</div>
							</div>
						</div>
						<div className="next-btn-container proceed-payment-btn">
							<p className="indentation">PROCEED PAYMENT</p>
						</div>
						<div className="problems-number">
							<p>Have a problem?</p>
							<img src={call} alt="" width="15" height="15" />
							<p>500-454-882</p>
						</div>
					</div>
				</div>
			</div>
		);
}

// import { loadStripe } from '@stripe/stripe-js';
// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// function Payment() {
// 	const handleClick = async (event) => {
// 		// Call your backend to create the Checkout session.
// 		// const { sessionId } = await fetchCheckoutSession();
// 		// When the customer clicks on the button, redirect them to Checkout.
// 		const stripe = await stripePromise;
// 		// const { error } = await stripe.redirectToCheckout({
// 		// 	sessionId,
// 		// });
// 		// If `redirectToCheckout` fails due to a browser or network
// 		// error, display the localized error message to your customer
// 		// using `error.message`.
// 	};
// 	return (
// 		<button role="link" onClick={handleClick}>
// 			Checkout
// 		</button>
// 	);
// }


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Payment = () => {
	return (
		<Elements stripe={stripePromise}>
			<MyCheckoutForm />
			{/* <CheckoutForm/> */}
		</Elements>
	);
};

export default Payment;