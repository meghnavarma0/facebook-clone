import React, { useEffect } from 'react';

import './App.css';
import { userRef } from './firebase';
import signUp from './api/signUp';
import signIn from './api/signIn';

function App() {
	useEffect(() => {
		const callFunc = () => {
			userRef.push({
				email: 'test@pqr.com',
				assword: '12345'
			});
		};
		// callFunc();

		//set

		//push
	}, []);

	const onSignIn = () => {
		const result = signIn('meghna6@test.com', 'password');
		console.log(result);
	};
	const onSignUp = () => {
		const result = signUp(
			'meghna6@test.com',
			'password',
			'meghna',
			'varma'
		);
		console.log(result);
	};

	return (
		<div className='App'>
			<button onClick={() => onSignIn()}>Sign In</button>
			<button onClick={() => onSignUp()}>Sign Up</button>
		</div>
	);
}

export default App;
