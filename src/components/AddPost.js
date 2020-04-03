import React, { useState } from 'react';
import { Textarea, Button, Icon } from 'react-materialize';
import { firebaseApp } from '../firebase';
import addPost from '../api/addPost';

const AddPost = () => {
	const [content, setContent] = useState('');
	const addNewPost = () => {
		if (!content) {
			return;
		}
		if (content.length > 120) {
			return;
		}
		const uid = firebaseApp.auth().currentUser.uid;
		const output = addPost(uid, content);
		if (output === true) {
			setContent('');
			console.log('Post successfully added!');
		} else if (output === false) {
			console.log('Post could not');
		}
	};
	return (
		<div
			className='outerBox'
			style={{
				width: '100%'
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column'
					// justifyContent: 'center',
					// alignItems: 'center'
				}}
			>
				<h6 style={{ textAlign: 'center' }}>
					<b>What's in your mind ?</b>
				</h6>
				{content}
				<Textarea
					id='Textarea-12'
					label='Write something here...'
					onChange={event => setContent(event.target.value)}
					value={content}
				/>
				<Button
					node='button'
					type='submit'
					waves='light'
					onClick={addNewPost}
					style={{
						background: '#3b5998',
						marginLeft: 'auto',
						width: '150px'
					}}
				>
					Post
					<Icon right>send</Icon>
				</Button>
			</div>
		</div>
	);
};

export default AddPost;
