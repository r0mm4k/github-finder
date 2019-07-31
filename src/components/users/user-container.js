import React, { useContext } from 'react';
import GithubContext from '../../context/github/github-context';
import User from './user';

const UserContainer = (props) => {

	const githubContext = useContext(GithubContext);
	const {user, getUser, getUserRepos, loading, repos} = githubContext;

	return <User
		{...props}
		user={user}
		loading={loading}
		getUser={getUser}
		repos={repos}
		getUserRepos={getUserRepos}/>;
};

export default UserContainer;