import { postRef } from '../firebase';

export default postKey => {
	postRef
		.child(postKey)
		.remove()
		.then(data => {
			console.log(data);
			return { message: 'Removed' };
		})
		.catch(error => ({ error: error.message }));
};
