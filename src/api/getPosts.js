import { postRef } from '../firebase';

export default () => {
	console.log('into the function');
	postRef.once('value', snap => {
		return snap.val();
	});
};
