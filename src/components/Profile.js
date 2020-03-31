import React from 'react';
import img from '../assets/meghna-min.jpg';
import edit from '../assets/edit.png';

const Profile = () => {
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
					justifyContent: 'spaceAround',
					alignItems: 'center'
				}}
			>
				<span style={{ margin: '0px' }}>
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
				<span style={{ fontWeight: 'bold', margin: 'auto' }}>
					<b>Meghna Varma</b>
				</span>
				<span>
					<img
						src={edit}
						alt='edit'
						style={{
							height: '25px',
							width: '25px'
						}}
					/>
				</span>
			</div>
			<hr />
			<div>
				<h5 style={{ color: 'blue' }}>About Me!</h5>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quae corporis, nobis placeat assumenda illum laudantium?
				</p>
			</div>
		</div>
	);
};
export default Profile;
