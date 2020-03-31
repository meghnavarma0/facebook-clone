import React from 'react';
import { Navbar, NavItem, Icon, Container } from 'react-materialize';
import { firebaseApp } from '../../firebase';
import img from '../../assets/facebook.png';

export default () => {
	return (
		<div style={{ background: '#3b5998' }}>
			<Container>
				<Navbar
					className='custom-navbar'
					alignLinks='right'
					brand={
						<a className='brand-logo' href='www.google.com'>
							<img
								src={img}
								alt='logo'
								style={{
									height: '40px',
									backgroundColor: 'white',
									marginTop: '12px'
								}}
							/>
						</a>
					}
					id='mobile-nav'
					menuIcon={<Icon>menu</Icon>}
					options={{
						draggable: true,
						edge: 'left',
						inDuration: 250,
						onCloseEnd: null,
						onCloseStart: null,
						onOpenEnd: null,
						onOpenStart: null,
						outDuration: 200,
						preventScrolling: true
					}}
				>
					<NavItem
						href='components.html'
						onClick={event => {
							event.preventDefault();
							firebaseApp.auth().signOut();
						}}
					>
						Log Out
					</NavItem>
				</Navbar>
			</Container>
		</div>
	);
};
