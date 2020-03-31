import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import { firebaseApp } from './firebase';
import SignUp from './components/SignUp';
import Feed from './components/Feed';
import Navbar from './components/Reusable/Navbar';
import SignIn from './components/SignIn';

function App() {
	const [stage, setStage] = useState('');
	const [signUpSignIn, setSignUpSignIn] = useState('SI');

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged(function(user) {
			if (user) {
				// User is signed in.
				console.log(user.uid);
				setStage('loggedIn');
				setSignUpSignIn('SI');
			} else {
				// No user is signed in.
				console.log('No user logged in');
				setStage('notLoggedIn');
			}
		});
	}, []);

	const changeState = value => {
		// SI or SU
		setSignUpSignIn(value);
	};

	return (
		<div className='App'>
			<Navbar stage={stage} />
			{stage === 'loggedIn' && <Feed />}

			{stage === 'notLoggedIn' && signUpSignIn === 'SI' && (
				<SignIn changeState={changeState} />
			)}
			{stage === 'notLoggedIn' && signUpSignIn === 'SU' && (
				<SignUp changeState={changeState} />
			)}
		</div>
	);
}

export default App;
