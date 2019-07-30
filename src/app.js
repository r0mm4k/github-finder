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
		this.setState({loading: true});
		const res = await axios.get('https://api.github.com/users');
		res.status === 200 && this.setState({users: res.data, loading: false});
	}

	render() {

		const {users, loading} = this.state;

		return (
			<div className="app">
				<Navbar/>
				<div className="container">
					<Users loading={loading} users={users}/>
				</div>
			</div>
		);
	}
}

export default App;
