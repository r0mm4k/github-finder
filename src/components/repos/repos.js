import React from 'react';
import PropTypes from 'prop-types';
import ReposItem from './repos-item';

const Repos = ({repos}) => {
	return repos.map(({id, ...repo}) => <ReposItem key={id} repo={repo}/>);
};

Repos.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Repos;