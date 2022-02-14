import React from 'react';

import Helmet from './helmet';
import Header from './header';
import About from './about';
import Portfolio from './portfolio/portfolio-section';
import Contact from './contact';
import Footer from './footer';

const Layout = () => (
	<div>
		<Helmet />
		<Header />
		<About />
		<Portfolio />
		<Contact />
		<Footer />
	</div>
);

export default Layout;
