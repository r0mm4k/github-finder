import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

	state = {
		text: ''
	};

	onChangeValue = ({target: {value, name}}) => this.setState({[name]: value});
	onSubmitForm = (e) => e.preventDefault();

	render() {

		const {text} = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmitForm} className='form'>
					<input type='text' name='text' placeholder='Search Users...' value={text} onChange={this.onChangeValue}/>
					<input type='submit' value='Search' className='btn btn-dark btn-block'/>
				</form>
			</div>
		);
	}
}

Search.propTypes = {};

export default Search;
