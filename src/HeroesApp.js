import React, { useReducer } from 'react';
import { AppRouter } from './routes/AppRouter';
import { AuthContext } from './auth/AuthContext';

const init = () => {
	return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HeroesApp = () => {
	const [state, dispatch] = useReducer(reducer, {}, init);

	return (
		<AuthContext.Provider value={{}}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
