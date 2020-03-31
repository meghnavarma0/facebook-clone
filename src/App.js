import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import { userRef, firebaseApp } from './firebase';
import signUp from './api/signUp';
// import signIn from './api/signIn';
import SignUp from './components/SignUp';
import Feed from './components/Feed';
import Navbar from './components/Reusable/Navbar';
// import SignIn from './components/SignIn';

function App() {
	const [stage, setStage] = useState('');
	const onSignUp = () => {
		const result = signUp(
			'meghna7@test.com',
			'password',
			'meghna',
			'varma'
		);
		console.log(result);
	};

	firebaseApp.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			console.log(user.uid);
			setStage('loggedIn');
		} else {
			// No user is signed in.
			console.log('No user logged in');
			setStage('notLoggedIn');
		}
	});

	return (
		<div className='App'>
			<Navbar stage={stage} />
			{stage === 'loggedIn' && <Feed />}
			{stage === 'notLoggedIn' && <SignUp />}

			<button onClick={() => onSignUp()}>Sign Up</button>
		</div>
	);
}

export default App;
