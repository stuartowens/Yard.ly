import React from 'react'
import WorkerInfo from './workerInfo.jsx'
import EquipmentServicesInfo from './equipmentServicesInfo.jsx'
import RequestMaker from './requestMaker.jsx'
import { workersUpdateRoute, workersShowRoute } from '../../server/routes.js'

class WorkerProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			worker: {
				username: '',
				password: '',
				services: {
					Mowing: false,
					TreeTrimming: false,
					Edging: false,
					Weedeating: false,
					HedgeTrimming: false,
					Fertilizing: false,
					Aerating: false,
					Mulching: false,
					Weeding: false,
					Planting: false,
					GrassSeeding: false,
				},
				equipment: {
					LawnMower: false,
					Weedeater: false,
					MulchTruck: false,
					Edger: false,
					HedgeTrimmer: true,
					Chainsaw: false,
					LawnAerator: false,
					Seeder: false,
				},
				area: '',
				firstName: '',
				lastName: '',
				contactInfo: {
					phoneNumber: '',
					email: '',
				},
				rate: 10,
				requests: [],
				image: '',
				address: {
					address: '',
					city: '',
					state: '',
					zipcode: '',
				},
			},
			date: null,
			user: {
				_id: '5970ae7ae2aa44b1b406fdd6',
				requests: [],
				addresses: [
					{
						zipcode: '78633',
						state: 'Texas',
						city: 'Austin',
						address: '223 Great Frontier dr',
					},
					{
						zipcode: '78633',
						state: 'Texas',
						city: 'Austin',
						address: '223333 Great Frontier dr',
					},
					{
						zipcode: '78633',
						state: 'Texas',
						city: 'Austin',
						address: '3444433 Great Frontier dr',
					},
				],
				address: {
					zipcode: '78633',
					state: 'Texas',
					city: 'Georgetown',
					address: '124 Great Frontier dr',
				},
			},
		}
		// this.submitContactInfo = this.submitContactInfo.bind(this)
		this.submitEmail = this.submitEmail.bind(this)
		this.submitPhone = this.submitPhone.bind(this)
		this.submitArea = this.submitArea.bind(this)
		this.getWorker = this.getWorker.bind(this)
		this.updateWorker = this.updateWorker.bind(this)
		this.changeEquipment = this.changeEquipment.bind(this)
		this.onEquipmentClick = this.onEquipmentClick.bind(this)
		this.changeService = this.changeService.bind(this)
		this.onServicesClick = this.onServicesClick.bind(this)
		this.submitImage = this.submitImage.bind(this)
		this.updateUser = this.updateUser.bind(this)
		this.updateRequest = this.updateRequest.bind(this)
	}
	submitEmail(e) {
		e.preventDefault()
		var worker = this.state.worker
		worker.contactInfo.email = e.target.email.value !== ''
			? e.target.email.value
			: worker.contactInfo.email
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	submitPhone(e) {
		e.preventDefault()
		var worker = this.state.worker
		worker.contactInfo.phoneNumber = e.target.phoneNumber.value !== ''
			? e.target.phoneNumber.value
			: worker.contactInfo.phoneNumber
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	submitArea(e) {
		e.preventDefault()
		var worker = this.state.worker
		worker.area = e.target.area.value !== '' ? e.target.area.value : worker.area
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	submitImage(e) {
		e.preventDefault()
		var worker = this.state.worker
		console.log(e.target.image.value)
		worker.image = e.target.image.value !== ''
			? e.target.image.value
			: worker.image
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	updateRequest(requestId) {
		var worker = this.state.worker
		worker.requests = worker.requests.push(requestId)
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
		var user = this.state.user
		user.requests = user.requests.push(requestId)
		this.setState(
			{
				user: user,
			},
			() => this.updateUser(this.state.user._id, this.state.user),
		)

	}
	getWorker(id) {
		fetch('/api'.concat(workersShowRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'GET',
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				console.log('~~~~~~~worker', data)
				this.setState({ worker: data })
			})
			.then(() => {
				console.log('~~~~~~state', this.state)
			})
	}
	updateWorker(id, worker) {
		fetch('/api'.concat(workersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(worker),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				console.log('data', data)
				if (data) {
					this.setState({ worker: data }, () =>
						console.log('this.state after update', this.state.worker),
					)
				}
			})
			.then(() => {
				this.getWorker(this.props.worker._id)
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
				document.getElementById('image').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	updateUser(id, user) {
		fetch('/api'.concat(usersUpdateRoute(id)), {
			headers: { 'Content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(user),
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText)
				return res.json()
			})
			.then(data => {
				console.log('data', data)
				if (data) {
					this.setState({ user: data }, () =>
						console.log('this.state after update', this.state.user),
					)
				}
			})
			.then(() => {
				this.getWorker(this.props.user._id)
			})
			.then(() => {
				document.getElementById('email').value = ''
				document.getElementById('phoneNumber').value = ''
				document.getElementById('area').value = ''
				document.getElementById('image').value = ''
			})
			.catch(err => {
				console.log(err)
			})
	}
	onEquipmentClick(e) {
		this.changeEquipment(e)
	}
	changeEquipment(type) {
		var worker = this.state.worker
		worker.equipment[type] = !worker.equipment[type]
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	onServicesClick(e) {
		this.changeService(e)
	}
	changeService(type) {
		var worker = this.state.worker
		worker.services[type] = !worker.services[type]
		this.setState(
			{
				worker: worker,
			},
			() => this.updateWorker(this.state.worker._id, this.state.worker),
		)
	}
	componentDidMount() {
		console.log(this.props, 'asdf', this.props.location.pathname.slice(9))
		this.getWorker(this.props.location.pathname.slice(9))
	}
	render() {
		return (
			<div>
				<div>Worker profile</div>
				<div>{this.state.worker.firstName} {this.state.worker.lastName}</div>
				<WorkerInfo
					worker={this.state.worker}
					submitArea={this.submitArea}
					submitEmail={this.submitEmail}
					submitPhone={this.submitPhone}
				/>
				<EquipmentServicesInfo
					submitImage={this.submitImage}
					worker={this.state.worker}
					onEquipmentClick={this.onEquipmentClick}
					onServicesClick={this.onServicesClick}
				/>
				<RequestMaker updateRequest={this.updateRequest} user={this.state.user} worker={this.state.worker} addresses={this.state.user.addresses} />
			</div>
		)
	}
}

export default WorkerProfile
