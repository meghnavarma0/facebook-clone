import React from 'react';
import { TextInput } from 'react-materialize';

export default () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div className='outerBox'>
				<TextInput label='email' />
				<TextInput label='Password' />
			</div>
		</div>
	);
};
