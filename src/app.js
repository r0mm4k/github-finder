import React, { Component } from 'react';
import * as axios from 'axios';

import Navbar from './components/layout/navbar';
import Users from './components/users/users';

import './app.css';

class App extends Component {

	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
		const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/users?client_id=${client_id}&client_secret=${client_secret}`);
		res.status === 200 && this.setState({users: res.data, loading: false});
	}

	render() {

		const {users, loading} = this.state;

		return (
			<div className='app'>
				<Navbar/>
				<div className='container'>
					<Users loading={loading} users={users}/>
				</div>
			</div>
		);
	}
}

export default App;
