import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './user-item';

const Users = ({users}) => {
	const usersElement = users.map(({id, ...user}) => <UserItem key={id} {...user}/>);
	return (
		<div className='grid-3'>
			{usersElement}
		</div>
	);
};

Users.defaultProps = {
	users: []
};

Users.propTypes = {
	users: PropTypes.array.isRequired
};

export default Users;
