import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as axios from 'axios';

import Navbar from './components/layout/navbar';
import Users from './components/users/users';
import User from './components/users/user';
import Search from './components/users/search';
import Alert from './components/layout/alert';
import About from './components/pages/about';

import './app.css';

const App = () => {
	const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
	const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	//Clear Users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	//Set alert
	const showAlert = (msg, type) => {
		setAlert({msg, type});
		setTimeout(() => setAlert(null), 5000);
	};

	//Search GitHub Users
	const searchUsers = async (text) => {
		setLoading(true);
		const res = await axios
			.get(`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`);
		setUsers(res.data.items);
		setLoading(false);
	};

	//Get single GitHub User
	const getUser = async (username) => {
		setLoading(true);
		const res = await axios
			.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
		setUser(res.data);
		setLoading(false);
	};

	//Get User Repos
	const getUserRepos = async (username) => {
		setLoading(true);
		const res = await axios
			.get(`https://api.github.com/users/
			${username}/repos?per_page=5&sort=created:asc&client_id=
			${client_id}&client_secret=${client_secret}`);
		setRepos(res.data);
		setLoading(false);
	};

	//Get Initial Users
	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://api.github.com/users?client_id=${client_id}&client_secret=${client_secret}`)
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			});
		//eslint-disable-next-line
	}, []);

	return (
		<Router>
			<div className='app'>
				<Navbar/>
				<div className='container'>
					<Switch>
						<Route exact path='/' render={() => (
							<Fragment>
								<Alert alert={alert}/>
								<Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={!!users.length}
												showAlert={showAlert}/>
								<Users loading={loading} users={users}/>
							</Fragment>
						)}/>
						<Route exact path='/about' render={() => <About/>}/>
						<Route exact path='/user/:login' render={(props) => <User {...props} user={user}
																																			loading={loading}
																																			repos={repos}
																																			getUserRepos={getUserRepos}
																																			getUser={getUser}/>}/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
