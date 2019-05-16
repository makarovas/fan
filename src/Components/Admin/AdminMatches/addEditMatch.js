import React, { Component } from 'react'
import AdminLayout from './../../HOC/AdminLayout';
import FormField from './../../ui/formField';
import { validate } from './../../ui/misc';

export default class AddEditMatch extends Component {
	state = {
		matchId: '',
		formType: '',
		formError: false,
		formSuccess: '',
		teams: [],
		formdata: {
			date: {
				element: 'input',
				value: '',
				config: {
					label: 'Event date',
					name: 'date_input',
					type: 'date'
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			local: {
				element: 'select',
				value: '',
				config: {
					label: 'select a local team',
					name: 'select_local',
					type: 'select',
					options: []
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: false
			},
		}
	}
	render() {
		return (
			<AdminLayout>
				<div className="editmatch_dialog_wrapper">
					<h2>{this.state.formType}</h2>
				</div>
				<div>
					<form onSubmit={(event) => this.submitForm(event)}></form>
				</div>
				<FormField
					id='date'
					formdata={this.state.formdata.date}
					change={(element) => this.updateForm(element)} />
			</AdminLayout>
		)
	}
}
