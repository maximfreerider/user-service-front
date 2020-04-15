import React from 'react'
import './User.css';
import {Modal} from '../components/Modal.js';
import Input from '../components/Input';

export class UserPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: null,
			isShowing: false
		}
	}

	openModalHandler = () => {
		this.setState({isShowing: true})
	}

	closeModalHandler = () => {
		this.setState({isShowing: false})
	}

	deleteUser = (id) => {
			// console.log(event);
			fetch(`http://127.0.0.1:8000/api/v1/user/${id}/`, {method: 'delete'})
				.then(res => {
					console.log(res);
				})
				let newData = this.state.data.filter(elem => {
					return elem.id !== id
				})
			this.setState({data: newData})

	}
	getUsers = () => {
		fetch('http://127.0.0.1:8000/api/v1/user/')
		.then(response => response.json())
		.then(data => this.setState({data}))
	}

	componentDidMount(){
		this.getUsers();
	}

	render () {
		console.log(this.state.data);
		return (
			<div>
			<table>
				 <thead>
					 <tr>
							 <th>id</th>
							 <th>Email</th>
							 <th>Group</th>
							 <th>Admin</th>
							 <th>Actions</th>
					 </tr>
				 </thead>
				 <tbody>
				 {
					 this.state.data && this.state.data
					 		.map(elem => {
								return (
									<tr key={elem.id}>
										 <td>{elem.id}</td>
										 <td>{elem.email}</td>
										 <td>{elem.group && elem.group.name_of_group}</td>
										 <td>
										 	<label>
					        			<input type="checkbox" className="filled-in" defaultChecked={elem.is_superuser} disabled/>
					        			<span></span>
					      				</label>
											</td>
										 <td>
										 	<button className="waves-effect waves-light btn-small button" type="submit" onClick={this.openModalHandler}>Edit User</button>
										 	<button className="waves-effect waves-light btn-small button"
											onClick={() => this.deleteUser(elem.id)}
												>Delete User</button>
										 </td>
									 </tr>
								);
							})
				 }
				 </tbody>
			 </table>
			 	<div>
					{this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
					<Modal className="modal" show={this.state.isShowing} close={this.closeModalHandler}>
					</Modal>
				</div>
			 </div>
		);
	}
}
