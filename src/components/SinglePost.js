import React from 'react';
import { Icon, Dropdown, Divider, Button } from 'react-materialize';
import img from '../assets/meghna-min.jpg';

const SinglePost = () => {
	return (
		<div
			className='outerBox'
			style={{
				width: '100%'
			}}
		>
			<div
				style={{
					display: 'flex'
					// justifyContent: 'spaceAround',
					// alignItems: 'center'
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
					<h6>Meghna Varma</h6>
				</span>
				<span style={{ marginLeft: 'auto' }}>
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
						<a href='www.google.com'>delete</a>
					</Dropdown>
				</span>
			</div>
			<hr />
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In
					eum itaque provident, quibusdam sint odit delectus dicta
					quis iusto amet.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
