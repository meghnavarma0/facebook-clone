import { userRef } from '../firebase';

export default ({ uid, firstName, lastName }) => {
	userRef
		.child(uid)
		.set({
			firstName,
			lastName
		})
		.then(data => true)
		.catch(() => false);
};
