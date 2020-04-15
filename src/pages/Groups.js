import React from 'react';

export class GroupPage extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			data: null
		}
	}

	getGroups = () => {
		fetch('http://127.0.0.1:8000/api/v1/group/')
			.then(res => res.json())
			.then(data => this.setState({data}))
	}
	componentDidMount(){
		this.getGroups();
	}
	render () {
		console.log(this.state.data);
		return (
			<>
			<div>group</div>
			<table>
				 <thead>
					 <tr>
							 <th>id</th>
							 <th>Name</th>
							 <th>Data Analytics</th>
							 <th>Voice Analytics</th>
							 <th>Queue Stats</th>
							 <th>Voive Stats</th>
							 <th>Video</th>
							 <th>Smart Access</th>
							 <th>Diagrams</th>
					 </tr>
				 </thead>
				 <tbody>
				 {
					 this.state.data && this.state.data
					 		.map(elem => {
								return (
									<tr key={elem.id}>
										 <td>{elem.id}</td>
										 <td>{elem.name_of_group}</td>
										 <td>
										 	<label>
					        			<input type="checkbox" className="filled-in" defaultChecked={elem.data_analytics} disabled/>
					        			<span></span>
					      				</label>
											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.voice_analytics} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.queue_stats} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.voice_stats} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.video} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.smart_access} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
											<td>
 										 	<label>
 					        			<input type="checkbox" className="filled-in" defaultChecked={elem.diagrams} disabled/>
 					        			<span></span>
 					      				</label>
 											</td>
									 </tr>
								);
							})
				 }
				 </tbody>
			 </table>
			</>
		);
	}
}
