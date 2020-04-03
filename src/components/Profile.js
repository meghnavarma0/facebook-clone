import React, { useState } from 'react';
import img from '../assets/meghna-min.jpg';
import edit from '../assets/edit.png';
import { Button } from 'react-materialize';
import EditProfile from './EditProfile';

const Profile = () => {
	const [editMode, setEditMode] = useState(false);
	const changeToFalse = () => {
		setEditMode(false);
	};
	return (
		<div>
			{editMode ? (
				<div
					className='outerBox'
					style={{
						width: '100%'
					}}
				>
					<EditProfile changeToFalse={changeToFalse} />
				</div>
			) : (
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
							<Button
								onClick={() => setEditMode(true)}
								style={{
									backgroundColor: 'white',
									boxShadow: 'none'
								}}
							>
								<img
									src={edit}
									alt='edit'
									style={{
										height: '25px',
										width: '25px'
									}}
								/>
							</Button>
						</span>
					</div>
					<hr />
					<div>
						<h5 style={{ color: 'blue' }}>About Me!</h5>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Quae corporis, nobis placeat assumenda illum
							laudantium?
						</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default Profile;
