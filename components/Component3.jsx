import React from 'react';
import Component4 from './Component4';

export default function Component3() {
	return (
		<div className="flex justify-center items-center bg-green-600 p-20 flex-col">
			I am Component3 inside Component2
			<Component4 />
		</div>
	);
}
