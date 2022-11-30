import React, {createContext, useContext} from 'react';

const usernameContext = createContext();// 1) create context as global scope and export it
export default function Component4() {
	const userName = useContext(usernameContext);
	return (
		<div className="flex flex-col bg-green-700  justify-center items-center p-20">
			<p>I am Component4</p>
			<p>I want to show this username is main component</p>
			<input
				placeholder="username"
				onChange={(e) => userName(e.target.value)}
			/>
		</div>
	);
}

export {usernameContext};
