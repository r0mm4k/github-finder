import React, { useReducer } from 'react';
import * as axios from 'axios';
import GithubContext from '../github/github-context';
import githubReducer from '../github/github-reducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../constants';

const GithubState = (props) => {

	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	let client_id;
	let client_secret;

	if (process.env.NODE_ENV !== 'production') {
		client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
		client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
	} else {
		client_id = process.env.REACT_APP_CLIENT_ID;
		client_secret = process.env.REACT_APP_CLIENT_SECRET;
	}

	const [state, dispatch] = useReducer(githubReducer, initialState);

	//Set Loading
	const setLoading = () => dispatch({type: SET_LOADING});

	//Search Users
	const searchUsers = async (text) => {
		setLoading();
		const res = await axios
			.get(`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`);
		dispatch({type: SEARCH_USERS, payload: res.data.items});
	};

	//Get single GitHub User
	const getUser = async (username) => {
		setLoading();
		const res = await axios
			.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
		dispatch({type: GET_USER, payload: res.data});
	};

	//Get User Repos
	const getUserRepos = async (username) => {
		setLoading();
		const res = await axios
			.get(`https://api.github.com/users/
			${username}/repos?per_page=5&sort=created:asc&client_id=
			${client_id}&client_secret=${client_secret}`);
		dispatch({type: GET_REPOS, payload: res.data});
	};

	//Clear Users
	const clearUsers = () => {
		dispatch({type: CLEAR_USERS});
	};

	return (
		<GithubContext.Provider value={{
			users: state.users,
			user: state.user,
			repos: state.repos,
			loading: state.loading,
			searchUsers,
			clearUsers,
			getUser,
			getUserRepos
		}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;