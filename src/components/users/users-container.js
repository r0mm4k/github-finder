import React, { useContext } from 'react';
import GithubContext from '../../context/github/github-context';
import Users from './users';

const UsersContainer = (props) => {
	const githubContext = useContext(GithubContext);
	const {users, loading} = githubContext;

	return <Users {...props} users={users} loading={loading}/>;
};

export default UsersContainer;
