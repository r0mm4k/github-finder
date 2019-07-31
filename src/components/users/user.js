import React, { Component } from 'react';
import Spinner from '../layout/spinner';

class User extends Component {

	componentDidMount() {
		const {getUser, match: {params: {login}}} = this.props;

		getUser(login);
	}

	render() {

		const {user: {name, avatar_url, location, bio, blog, login, html_url, followers,
			following, public_repos, public_gists, hireable}, loading} = this.props;

		if (loading) {
			return <Spinner/>;
		}

		return (
			<div>
				{name}
			</div>
		);
	}
}

export default User;