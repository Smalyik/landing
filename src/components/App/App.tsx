import React from 'react';
import Header from '../Header';
import Promo from '../Promo';
import About from '../About';
import Services from '../Services';
import Footer from '../Footer';
import Pricing from '../Pricing';
import Blog from '../Blog';
import Works from '../Works';
import Contact from '../Contact';

const App: React.FC = () => {
	return (
		<div id="App">
			<Header />
			<main>
				<Promo />
				<About />
				<Services />
				<Works />
				<Pricing />
				<Blog />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App;
