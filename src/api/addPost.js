import { postRef } from '../firebase';

export default (uid, content) => {
	console.log('into the function');
	postRef.push({
		createdBy: uid,
		content
	});
};
