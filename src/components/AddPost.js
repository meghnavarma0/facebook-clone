import React from 'react';
import { Textarea, Button, Icon } from 'react-materialize';

const AddPost = () => {
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
					<b>Have something in mind ?</b>
				</h6>

				<Textarea id='Textarea-12' label='Write something here...' />
				<Button
					node='button'
					type='submit'
					waves='light'
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
