import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as axios from 'axios';

import Navbar from './components/layout/navbar';
import Users from './components/users/users';
import User from './components/users/user';
import Search from './components/users/search';
import Alert from './components/layout/alert';
import About from './components/pages/about';

import './app.css';

class App extends Component {
	client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
	client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

	state = {
		users: [],
		user: {},
		repos: [],
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
		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/search/users?q=${text}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		res.status === 200 && this.setState({users: res.data.items, loading: false});
	};

	//Get single GitHub User
	getUser = async (username) => {
		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		res.status === 200 && this.setState({user: res.data, loading: false});
	};

	//Get Users Repos
	getUsersRepos = async (username) => {
		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/users/
			${username}/repos?per_page=5&sort=created:asc&client_id=
			${this.client_id}&client_secret=${this.client_secret}`);
		res.status === 200 && this.setState({repos: res.data, loading: false});
	};

	//Get Initial Users
	async componentDidMount() {
		this.setState({loading: true});
		const res = await axios
			.get(`https://api.github.com/users?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		res.status === 200 && this.setState({users: res.data, loading: false});
	}

	render() {

		const {users, user, loading, alert, repos} = this.state;

		return (
			<Router>
				<div className='app'>
					<Navbar/>
					<div className='container'>
						<Switch>
							<Route exact path='/' render={() => (
								<Fragment>
									<Alert alert={alert}/>
									<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={!!users.length}
													setAlert={this.setAlert}/>
									<Users loading={loading} users={users}/>
								</Fragment>
							)}/>
							<Route exact path='/about' render={() => <About/>}/>
							<Route exact path='/user/:login' render={(props) => <User {...props} user={user}
																																				loading={loading}
																																				repos={repos}
																																				getUsersRepos={this.getUsersRepos}
																																				getUser={this.getUser}/>}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
