import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import About from './about';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<About />
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
