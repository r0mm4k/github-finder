import React, { Component } from 'react';

import Navbar from './components/layout/navbar';

import './app.css';
import Users from './components/users/users';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar/>
				<div className="container">
					<Users/>
				</div>
			</div>
		);
	}
}

export default App;
