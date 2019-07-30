import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

	state = {
		text: ''
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
	};

	onChangeValue = ({target: {value, name}}) => this.setState({[name]: value});

	onSubmitForm = (e) => {
		const {searchUsers} = this.props;
		const {text} = this.state;

		e.preventDefault();
		searchUsers(text);
		this.setState({text: ''});
	};

	render() {

		const {text} = this.state;
		const {clearUsers, showClear} = this.props;

		return (
			<div>
				<form onSubmit={this.onSubmitForm} className='form'>
					<input type='text'
								 name='text'
								 placeholder='Search Users...'
								 required value={text}
								 onChange={this.onChangeValue}/>
					<input type='submit' value='Search' className='btn btn-dark btn-block'/>
				</form>
				{showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
			</div>
		);
	}
}

export default Search;
