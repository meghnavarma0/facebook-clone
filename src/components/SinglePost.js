import React, { useState, useEffect } from 'react';
import { Icon, Dropdown, Divider, Button } from 'react-materialize';
import img from '../assets/meghna-min.jpg';
import { userRef } from '../firebase';
import moment from 'moment';
import deletePost from '../api/deletePost';

const SinglePost = ({ details, myUID }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	useEffect(() => {
		const getName = () => {
			userRef.child(details.createdBy).once('value', snap => {
				setFirstName(snap.val()['firstName']);
				setLastName(snap.val()['lastName']);
			});
		};
		if (details && details.createdBy) {
			getName();
		}
	}, []);
	const onPostDelete = (event, postKey) => {
		event.preventDefault();
		const result = deletePost(postKey);
		console.log(result);
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
					// justifyContent: 'spaceAround',
					alignItems: 'center'
				}}
			>
				<span style={{ marginRight: '5px' }}>
					<img
						src={img}
						alt='dp'
						style={{
							height: '40px',
							width: '40px',
							borderRadius: '50%'
						}}
					/>
				</span>
				<span
					style={{
						fontWeight: 'bold',
						marginLeft: '10px',
						color: 'blue'
					}}
				>
					<h6 style={{ margin: '0px' }}>
						{firstName} {lastName}
					</h6>
					<p style={{ color: 'gray', margin: '0px' }}>
						{moment(details.createdAt).fromNow()}
					</p>
				</span>
				<span style={{ marginLeft: 'auto' }}>
					{myUID === details.createdBy && (
						<Dropdown
							id='Dropdown_6'
							options={{
								alignment: 'left',
								autoTrigger: true,
								closeOnClick: true,
								constrainWidth: true,
								container: null,
								coverTrigger: true,
								hover: false,
								inDuration: 150,
								onCloseEnd: null,
								onCloseStart: null,
								onOpenEnd: null,
								onOpenStart: null,
								outDuration: 250
							}}
							trigger={
								<Button
									node='button'
									style={{
										background: 'transparent',
										color: 'gray',
										boxShadow: 'none',
										marginRight: '0px'
									}}
								>
									<Icon>more_vert</Icon>
								</Button>
							}
						>
							<a href='www.google.com'>edit</a>
							<Divider />
							<a
								href='www.google.com'
								onClick={event => {
									onPostDelete(event, details.postKey);
								}}
							>
								delete
							</a>
						</Dropdown>
					)}
				</span>
			</div>
			<hr />
			<div>
				<p>{details && details.content ? details.content : ''}</p>
			</div>
		</div>
	);
};

export default SinglePost;
