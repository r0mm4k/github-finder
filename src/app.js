import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import About from './components/pages/about';
import UserContainer from './components/users/user-container';
import Home from './components/pages/home';
import NotFound from './components/pages/not-found';

import GithubState from './context/github/github-state';

import './app.css';

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className='app'>
					<Navbar/>
					<div className='container'>
						<Switch>
							<Route exact path='/' render={() => <Home/>}/>
							<Route exact path='/about' render={() => <About/>}/>
							<Route exact path='/user/:login' render={(props) => <UserContainer {...props} />}/>
							<Route render={() => <NotFound/>}/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
