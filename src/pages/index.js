import React from 'react';

import '../style.scss';
import Helmet from '../components/helmet';
import Header from '../components/header';
import About from '../components/about';
import Portfolio from '../components/portfolio/portfolio-section';
import Contact from '../components/contact';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <>      
      <Helmet />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
};

export default IndexPage;
