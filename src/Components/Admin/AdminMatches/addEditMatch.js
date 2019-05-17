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
			resultLocal: {
				element: 'input',
				value: '',
				config: {
					label: 'Event date',
					name: 'result_local_input',
					type: 'date'
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: false
			},
			away: {
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
			resultAway: {
				element: 'input',
				value: '',
				config: {
					label: 'Event date',
					name: 'result_local_input',
					type: 'date'
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: false
			},
			referee: {
				element: 'input',
				value: '',
				config: {
					label: 'Referee',
					name: 'referee_input',
					type: 'text'
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: true
			},
			stadium: {
				element: 'input',
				value: '',
				config: {
					label: 'Stadium',
					name: 'stadium_input',
					type: 'text'
				},
				validation: {
					required: true

				},
				valid: false,
				validationMessage: '',
				showlabel: true
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

				<div className="select_team_layout">
					<div className="label_inputs">	Local</div>
					<div className="wrapper">
						<div className="left">
							<FormField
								id='local'
								formdata={this.state.formdata.local}
								change={(element) => this.updateForm(element)} /></div>
						<div>
							<FormField
								id='reusltLocal'
								formdata={this.state.formdata.resultLocal}
								change={(element) => this.updateForm(element)} />
						</div>
					</div>
				</div>

				<div className="select_team_layout">
					<div className="label_inputs">	Away</div>
					<div className="wrapper">
						<div className="left">
							<FormField
								id='away'
								formdata={this.state.formdata.away}
								change={(element) => this.updateForm(element)} /></div>
						<div>
							<FormField
								id='reusltAway'
								formdata={this.state.formdata.resultAway}
								change={(element) => this.updateForm(element)} />
						</div>
					</div>
				</div>

			</AdminLayout>
		)
	}
}
