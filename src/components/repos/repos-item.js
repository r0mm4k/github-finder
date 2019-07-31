import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({repo: {html_url, name}}) => {
	return (
		<div className='card'>
			<a href={html_url}>{name}</a>
		</div>
	);
};

ReposItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default ReposItem;