import { firebaseApp, userRef } from '../firebase';

export default (email, password) => {
	console.log('into the function');
	firebaseApp
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			console.log(user.user);
			userRef.child(user.user.uid).once('value', snapshot => {
				console.log(snapshot.val());
				return snapshot.val();
			});
		})
		.catch(err => {
			console.log(err.message);
			console.log('user could not be signed in!');
			return err;
		});
};
