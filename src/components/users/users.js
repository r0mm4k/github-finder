import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './user-item';
import Spinner from '../layout/spinner';

const Users = ({users, loading}) => {

	const usersElement = users.map(({id, ...user}) => <UserItem key={id} {...user}/>);

	if (loading) {
		return <Spinner/>;
	}

	return (
		<div className='grid-3'>
			{usersElement}
		</div>
	);
};

Users.defaultProps = {
	users: [],
	loading: false
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Users;
