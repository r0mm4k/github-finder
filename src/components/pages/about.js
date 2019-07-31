import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../layout/spinner';

const About = ({loading}) => {


	if (loading) {
		return <Spinner/>;
	}

	return (
		<Fragment>
			<h1>About this App:</h1>
			<p>- App to search GitHub Users</p>
			<p>- Version: 1.0.0</p>
		</Fragment>
	);
};

About.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default About;