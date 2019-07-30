import React, { Component } from 'react';
import * as axios from 'axios';

import Navbar from './components/layout/navbar';
import Users from './components/users/users';

import './app.css';
import Search from './components/users/search';
import Alert from './components/layout/alert';

class App extends Component {

	state = {
		users: [],
		loading: false,
		alert: null
	};

	//Clear Users from state
	clearUsers = () => this.setState({users: [], loading: false});

	//Set alert
	setAlert = (msg, type) => {
		this.setState({alert: {msg, type}});
		setTimeout(() => this.setState({alert: null}), 5000);
	};

	//Search GitHub Users
	searchUsers = async (text) => {
		const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
		const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`);
		res.status === 200 && this.setState({users: res.data.items, loading: false});
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

		const {users, loading, alert} = this.state;

		return (
			<div className='app'>
				<Navbar/>
				<div className='container'>
					<Alert alert={alert}/>
					<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={!!users.length}
									setAlert={this.setAlert}/>
					<Users loading={loading} users={users}/>
				</div>
			</div>
		);
	}
}

export default App;
