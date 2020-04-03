import React, { useState } from 'react';
import { firebaseApp } from '../firebase';
import editUser from '../api/editUser';

export default ({ changeToFalse }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const onSubmit = () => {
		const uid = firebaseApp.auth().currentUser.uid;
		const data = {
			uid,
			firstName,
			lastName
		};
		if (editUser(data)) {
			console.log('User edited!');
		} else {
			console.log('ERROR');
		}
	};

	return (
		<div>
			<div onClick={changeToFalse}>go back</div>
			<input
				type='text'
				placeholder='First Name'
				value={firstName}
				onChange={event => setFirstName(event.target.value)}
			/>
			<input
				type='text'
				placeholder='Last Name'
				value={lastName}
				onChange={event => setLastName(event.target.value)}
			/>
			<button type='submit' onClick={onSubmit}>
				Edit
			</button>
		</div>
	);
};
