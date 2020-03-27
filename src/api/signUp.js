import { firebaseApp, userRef } from '../firebase';

export default (email, password, firstname, lastname) => {
	if (!firstname || !lastname) {
		return false;
	}
	firebaseApp
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(data => {
			userRef.child(data.user.uid).set({
				firstname,
				lastname,
				email
			});
			return true;
		})
		.catch(err => {
			console.log(err);
			return err;
		});
};
