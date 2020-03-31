import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import Profile from './Profile';

export default () => {
	return (
		<Container>
			<Row>
				<Col s={12} m={4}>
					<Profile />
				</Col>
				<Col className='red' s={12} m={8}>
					Field
				</Col>
			</Row>
		</Container>
	);
};
