import React, { useEffect, useState } from 'react';

import { postRef, firebaseApp } from '../firebase';
import SinglePost from './SinglePost';

export default () => {
	const [posts, setPosts] = useState([]);
	const [myUID, setMyUID] = useState('');
	useEffect(() => {
		const getAllThePosts = async () => {
			postRef.on('value', snap => {
				var fetchedPosts = [];
				snap.forEach(singlePost => {
					fetchedPosts.push({
						...singlePost.val(),

						postKey: singlePost.key
					});
				});
				const uid = firebaseApp.auth().currentUser.uid;
				setMyUID(uid);

				setPosts(fetchedPosts);
			});
		};
		getAllThePosts();
	}, []);
	return (
		<div>
			{posts.map((singlePost, index) => (
				<SinglePost details={singlePost} key={index} myUID={myUID} />
			))}
		</div>
	);
};
