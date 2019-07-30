import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import UserItem from './user-item';

class Users extends Component {

	state = {
		users: [
			{
				id: '1',
				login: 'mojombo',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo'
			},
			{
				id: '2',
				login: 'defunkt',
				avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
				html_url: 'https://github.com/defunkt'
			},
			{
				id: '3',
				login: 'login',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
				html_url: 'https://github.com/mojombo'
			}
		]
	};

	render() {

		const usersElement = this.state.users.map(({id, ...user}) => <UserItem key={id} {...user}/>);

		return (
			<div className='grid-3'>
				{usersElement}
			</div>
		);
	}
}

export default Users;
