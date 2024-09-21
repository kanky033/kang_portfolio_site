import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import KevinMrSmurples from "../assets/images/kevin_mrsmurples.png";


export const Contact = () => {

  const initialFormDetails = {
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		message: ''
  }

	const [formDetails, setFormDetails] = useState(initialFormDetails)
	const [buttonText, setButtonText] = useState("Send")
	const [status, setStatus] = useState({})

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setButtonText("Sending")
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json;charset=utf-8",
			},
			body: JSON.stringify(formDetails)
		})
		setButtonText("Send")
		let result = await response.json()
		console.log("Server response:", result)
		setFormDetails(initialFormDetails)
		/* sends email but success is false??? */
		if (result.code === 200) {
			setStatus({ success: true, message: "Successfully Sent" })
		} else {
			setStatus({ success: false, message: "Failed to Send" })
			console.log(result.code);
		}
	}

  return(
		<section className="contact" id="contacts">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={KevinMrSmurples} alt="Contact Image"/>
					</Col>
					<Col md={6}>
						<h2>Chuck Me A Message!</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className="px-1">
									<input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate("firstName", e.target.value)}/>
								</Col>
								<Col sm={6} className="px-1">
									<input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate("lastName", e.target.value)}/>
								</Col>
								<Col sm={6} className="px-1">
									<input type="text" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=> onFormUpdate("phone", e.target.value)}/>
								</Col>
								<Col sm={6} className="px-1">
									<input type="text" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate("email", e.target.value)}/>
								</Col>
								<Col size={12} className="px-1">
									<textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
									<button type="submit"><span>{buttonText}</span></button>
								</Col>
								{
									status.message &&
									<Col>
										<p className={status.success === false ? "danger" : "success"}>{status.message}</p>
									</Col>
								}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	)
}