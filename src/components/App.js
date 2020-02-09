import React from 'react';
import { RobotProvider } from '../context/RobotContext';
import { Header, MainContent } from './common';

function App() {
	return (
		<div className="site">
			<RobotProvider>
				<Header>
					<h2 className="site-title">Iress Toy Robot</h2>
				</Header>
				<MainContent />
			</RobotProvider>
		</div>
	);
}

export default App;
