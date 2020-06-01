import React from 'react';
import Header from '../Header';
import Promo from '../Promo';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Promo/>
			</main>
		</>
	);
};

export default App;
