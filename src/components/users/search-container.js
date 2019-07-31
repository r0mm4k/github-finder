import React, { useContext } from 'react';
import GithubContext from '../../context/github/github-context';
import AlertContext from '../../context/alert/alert-context';

import Search from './search';

const SearchContainer = (props) => {

	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const {searchUsers, clearUsers, users} = githubContext;
	const {setAlert} = alertContext;

	return <Search
		{...props}
		clearUsers={clearUsers}
		searchUsers={searchUsers}
		showClear={!!users.length}
		setAlert={setAlert}/>;
};

export default SearchContainer;
