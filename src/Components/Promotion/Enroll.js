import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormField from './../ui/formField'
import { validate } from './../ui/misc';
import { firebasePromotions } from './../../firebase';
export default class Enroll extends Component {
	state = {
		formError: false,
		formSucces: '',
		formdata: {
			email: {
				element: 'input',
				value: '',
				config: {
					name: 'email_input',
					type: 'email',
					placeholder: 'Right here'
				},
				validation: {
					required: true,
					email: true
				},
				valid: false,
				validationMessage: ''
			},
		}
	}

	submitForm = (event) => {
		event.preventDefault();
		let dataToSubmit = {};
		let formIsValid = true;
		for (let key in this.state.formdata) {
			dataToSubmit[key] = this.state.formdata[key].value;
			formIsValid = this.state.formdata[key].valid && formIsValid;
		}

		if (formIsValid) {
			// this.resetFormSuccess();

			firebasePromotions
				.orderByChild('email')
				.equalTo(dataToSubmit.email)
				.once('value')
				.then((snapshot) => {
					if (snapshot.val() === null) {
						firebasePromotions.push();
						this.resetFormSuccess(true);
					} else {
						this.resetFormSuccess(false)
					}
				})
		} else {
			this.setState({
				formError: true
			})
		}
	}

	updateForm = (element) => {
		const newFormdata = { ...this.state.formdata }
		const newElement = { ...newFormdata[element.id] }
		newElement.value = element.event.target.value;
		let validData = validate(newElement);
		newElement.valid = validData[0];
		newElement.validationMessage = validData[1];
		newFormdata[element.id] = newElement;
		this.setState({
			fomrError: false,
			formdata: newFormdata
		})
	}

	resetFormSuccess = (type) => {
		const newFormdata = { ...this.state.formdata }
		for (let key in newFormdata) {
			newFormdata[key].value = '';
			newFormdata[key].valid = false;
			newFormdata[key].validationMessage = '';
		}
		this.setState({
			formError: false,
			formdata: newFormdata,
			formSucces: type ? 'Congrutalations' : 'Already on the database'
		})
		this.succesMessage();
	}

	succesMessage = () => {
		setTimeout(() => {
			this.setState({
				formSucces: ''
			})
		}, 2000);
	}

	render() {
		return (
			<Fade>
				<div className='enroll_wrapper'>
					<form
						onSubmit={(event) => this.submitForm(event)}>
						<div className="enroll_title">
							Type you email
						</div>
						<div className="enroll_input">
							<FormField
								id='email'
								formdata={this.state.formdata.email}
								change={(element) => this.updateForm(element)}
							/>
							{this.state.formError ?
								<div className='error_label'>Something is wrong, try again</div> :
								null}
							<div className='success_label'>
								{this.state.formSucces}
							</div>
							<button
								onClick={(event) => this.submitForm(event)}>
								Enroll
							</button>

						</div>
					</form>
				</div>
			</Fade >
		)
	}
}
