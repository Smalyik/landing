import React from 'react';
import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import Footer from '../Footer';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Promo />
				<About />
			</main>
			<Footer />
		</>
	);
};

export default App;
