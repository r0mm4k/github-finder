import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../layout/spinner';
import Repos from '../repos/repos';

class User extends Component {

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
		getUsersRepos: PropTypes.func.isRequired,
		repos: PropTypes.array.isRequired
	};

	componentDidMount() {
		const {getUser, getUsersRepos, match: {params: {login}}} = this.props;
		getUser(login);
		getUsersRepos(login);
	}

	render() {

		const {
			user: {
				name, avatar_url, location, bio, blog, login, html_url, followers,
				following, public_repos, public_gists, hireable, company
			}, loading, repos
		} = this.props;

		if (loading) return <Spinner/>;

		return (
			<Fragment>
				<Link to={'/'} className='btn btn-light'> Back To Search</Link>
				Hireable: {hireable ? <i className='fas fa-check text-success'/> :
				<i className='fas fa-times-circle text-danger'/>}
				<div className='card grid-2'>
					<div className='all-center'>
						<img src={avatar_url} className='round-img' alt={name} style={{width: '150px'}}/>
						<h1>{name}</h1>
						<p>{location}</p>
					</div>
					<div>
						{bio && <Fragment>
							<h3>Bio:</h3>
							<p>{bio}</p>
						</Fragment>}
						<a href={html_url} className='btn btn-dark my-1'>Visit GitHub Profile</a>
						<ul>
							<li>{login && <Fragment>
								<strong>Username: </strong> {login}
							</Fragment>}</li>
							<li>{company && <Fragment>
								<strong>Company: </strong> {company}
							</Fragment>}</li>
							<li>{blog && <Fragment>
								<strong>Website: </strong> {blog}
							</Fragment>}</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>Followers: {followers}</div>
					<div className='badge badge-success'>Following: {following}</div>
					<div className='badge badge-light'>Public Repos: {public_repos}</div>
					<div className='badge badge-dark'>Public Gist: {public_gists}</div>
				</div>
				<Repos repos={repos}/>
			</Fragment>
		);
	}
}

export default User;