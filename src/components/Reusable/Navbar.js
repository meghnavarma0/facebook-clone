import React from 'react';
import { Navbar, NavItem, Icon, Container } from 'react-materialize';

export default () => {
	return (
		<div style={{ background: 'royalblue' }}>
			<Container>
				<Navbar
					className='custom-navbar'
					alignLinks='right'
					brand={
						<a className='brand-logo' href='www.google.com'>
							Logo
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
					<NavItem href='components.html'>Log Out</NavItem>
				</Navbar>
			</Container>
		</div>
	);
};
