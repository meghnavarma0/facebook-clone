import React from 'react';
import { Container, Row, Col } from 'react-materialize';

export default () => {
	return (
		<Container>
			<Row>
				<Col className='teal' s={12} m={4}>
					Profile
				</Col>
				<Col className='red' s={12} m={8}>
					Field
				</Col>
			</Row>
		</Container>
	);
};
