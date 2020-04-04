import React, { useState } from 'react';
import { firebaseApp, storageRef } from '../firebase';
import editUser from '../api/editUser';

export default ({ changeToFalse }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [image, setImage] = useState('');
	const onSubmit = () => {
		const uid = firebaseApp.auth().currentUser.uid;

		if (image) {
			let uploadTask = storageRef.ref(`image/${image.name}`).put(image);
			uploadTask.on(
				'state_changed',
				() => {},
				error => {
					console.log('There is an error', error);
				},
				() => {
					// add URL to the database
					uploadTask.snapshot.ref
						.getDownloadURL()
						.then(function(imageURL) {
							const data = {
								uid,
								firstName,
								lastName,
								imageURL
							};
							if (editUser(data)) {
								console.log('User edited!');
							} else {
								console.log('ERROR');
							}
						});
				}
			);
		} else {
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
		}
	};

	return (
		<div>
			<div onClick={changeToFalse}>go back</div>
			{image && (
				<img
					src={URL.createObjectURL(image)}
					alt='profile pic'
					height='40px'
				/>
			)}
			<input
				type='file'
				onChange={event => setImage(event.target.files[0])}
			/>
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
