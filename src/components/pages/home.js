import React, { Fragment } from 'react';

import AlertState from '../../context/alert/alert-state';

import AlertContainer from '../layout/alert-container';
import SearchContainer from '../users/search-container';
import UsersContainer from '../users/users-container';

const Home = () => {
	return (
		<AlertState>
			<Fragment>
				<AlertContainer/>
				<SearchContainer/>
				<UsersContainer/>
			</Fragment>
		</AlertState>
	);
};

export default Home;