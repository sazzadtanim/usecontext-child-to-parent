import React from 'react';
import Component3 from './Component3';

export default function Component2() {
	return (
		<div className="flex justify-center items-center bg-green-500 p-20 flex-col">
			I am Component2 inside Component1
			<Component3 />
		</div>
	);
}
