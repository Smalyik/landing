import React from 'react';
import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import Services from '../Services';
import Footer from '../Footer';
import Pricing from '../Pricing';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Promo />
				<About />
				<Services />
				<Pricing />
			</main>
			<Footer />
		</>
	);
};

export default App;
