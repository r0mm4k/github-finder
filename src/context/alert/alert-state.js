import React, { useReducer } from 'react';
import AlertContext from './alert-context';
import alertReducer from './alert-reducer';
import { SET_ALERT, REMOVE_ALERT } from '../constants';

const AlertState = (props) => {

	const initialState = {
		alert: null
	};

	//Set alert
	const setAlert = (msg, type) => {
		dispatch({type: SET_ALERT, payload: {msg, type}});
		setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
	};

	const [state, dispatch] = useReducer(alertReducer, initialState);

	return (
		<AlertContext.Provider value={{
			alert: state.alert,
			setAlert
		}}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;