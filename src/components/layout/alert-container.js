import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alert-context';

import Alert from './alert';

const AlertContainer = (props) => {

	const alertContext = useContext(AlertContext);
	const {alert} = alertContext;

	return <Alert {...props} alert={alert}/>;
};

export default AlertContainer;