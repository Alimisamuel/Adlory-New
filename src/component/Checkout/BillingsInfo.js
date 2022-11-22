import React, { useRef, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
const BillingsInfo = (props) => {
	const history = useHistory();
	let carts = useSelector((state) => state.products.carts);
	// console.log(carts);

	let cart_detail_for_email = carts.map((item) => {
		return (
			<div style={{ display: "none" }}>
				<input value={item.title + " " + " "} name="item_name" />
				<input value={item.price + " " + " " + " "} name="item_price" />
				<input value={item.quantity + " " + " "} name="item_quantity" />
			</div>
		);
	});

	const cartTotal = () => {
		return carts.reduce(function (total, item) {
			return total + (item.quantity || 1) * item.price;
		}, 0);
	};

	const [email, setEmail] = useState("");
	

	const formRef = useRef();
	const config = {
		reference: new Date().getTime().toString(),
		email: email,
		amount: (cartTotal() * 100) + (150 * 100),
		publicKey: "pk_live_78f5548212e877898dd29eff6de6d4229952892d",
	};

	const sendEmail = () => {
		emailjs.sendForm("service_wnvavie", "template_nz80n82", formRef.current, "Tj0n7EmWjCanLAW8Z").then(
			(result) => {
				
				alert("Your Request is now being processed and you should get a response mail shortly");
			},
			(error) => {
				console.log(error.text);
				alert("There was an error trying to process your message, refresh your browser and try again!");
			}
		);
	};
	const handlePaystackSuccessAction = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);

		alert("about to send email");
		sendEmail();
		alert("email sent");
		history.push("/invoice-one");
	};

	// you can call this function anything
	const handlePaystackCloseAction = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	const componentProps = {
		...config,
		text: "Make Payment",
		onSuccess: (reference) => handlePaystackSuccessAction(reference),
		onClose: handlePaystackCloseAction,
	};

	return (
		<>
			<div className="col-lg-6 col-md-12 col-sm-12 col-12">
				<div className="checkout-area-bg bg-white">
					<div className="check-heading">
						<h3>Billings Information</h3>
					</div>
					<div className="check-out-form">
						<form method="post" ref={formRef}>
							<div className="row">
								<div className="col-lg-6 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="fname">
											First name<span className="text-danger">*</span>{" "}
										</label>
										<input
											type="text"
											required=""
											className="form-control"
											id="fname"
											placeholder="First name"
											name="first_name"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="lname">
											Last name<span className="text-danger">*</span>
										</label>
										<input
											type="text"
											required=""
											className="form-control"
											id="lname"
											placeholder="Last name"
											name="last_name"
										/>
									</div>
								</div>
								{/* cart data mapped to be sent do emailJS */}
								{cart_detail_for_email}
								<div className="col-lg-12 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="email">
											Email Address<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											required=""
											type="email"
											id="email"
											onChange={(e) => setEmail(e.target.value)}
											placeholder="info@gmail.com"
											name="email"
										/>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="email">
											Phone Number<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											required=""
											type="email"
											id="phone_number"
											// onChange={(e) => setEmail(e.target.value)}
											placeholder="your phone number"
											name="phone_number"
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="full_address">
											Full Address<span className="text-danger">*</span>
										</label>
										<textarea
											rows="5"
											className="form-control"
											id="full_address"
											name="full_address"
											placeholder="Enter your prefered delivery address"></textarea>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-=12 col-12">
									<div className="form-group">
										<label htmlFor="messages">
											Additional Notes<span className="text-danger"></span>
										</label>
										<textarea
											rows="5"
											className="form-control"
											id="messages"
											placeholder="Order notes"></textarea>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-sm-=12 col-12">
									<div className="form-check">
										<input
											type="checkbox"
											className="form-check-input"
											id="materialUnchecked"
										/>
										<label className="form-check-label" htmlFor="materialUnchecked">
											Save In Address Book
										</label>
									</div>
								</div>
							</div>
							<button
								onClick={(e) => {
									e.preventDefault();
								}}
								name="submit"
								style={{ padding: "20px 40px", width:'100%', backgroundColor:'black' }}>
								<PaystackButton {...componentProps} color='red'/>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BillingsInfo;