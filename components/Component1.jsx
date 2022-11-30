import React from 'react';
import Component2 from './Component2';

export default function Component1() {
	return (
		<div className="flex flex-col bg-green-400 p-20 justify-center items-center">
			I am Component1 inside main
			<Component2 />
		</div>
	);
}
