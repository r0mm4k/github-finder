import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {

	static propTypes = {
		login: PropTypes.string.isRequired,
		avatar_url: PropTypes.string.isRequired,
		html_url: PropTypes.string.isRequired,
	};

	render() {
		const {login, avatar_url, html_url} = this.props;
		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					className='round-img'
					alt=""
					style={{width: '60px'}}/>
				<h3>{login}</h3>
				<div>
					<a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
