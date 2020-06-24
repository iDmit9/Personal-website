import React from 'react';
import '../style.scss';

import PortfolioItem from './portfolio-item';

import portfolioImg from '../../images/card-portfolio.png';
import emailyImg from '../../images/card-emaily.png';
import burgerImg from '../../images/card-buter.png';
import shoppingImg from '../../images/card-shopping.png';
import AWSImg from '../../images/card-aws2.png';
import mealsImg from '../../images/card-meals.png';

const Portfolio = () => {

   const gatsby = <span className="tag is-medium gatsby">Gatsby</span>;
   const react = <span className="tag is-medium react">React</span>;
   const bulma = <span className="tag is-medium is-primary">Bulma</span>;
   const graphql = <span className="tag is-medium graphql">GraphQL</span>;
   const reactNative = <span className="tag is-medium is-info">React Native</span>;
   const firebase = <span className="tag is-medium is-warning">Firebase</span>;
   const redux = <span className="tag is-medium is-danger">Redux</span>;
   const reactNavigation = <span className="tag is-medium react-nav">React Navigation</span>;
   const node = <span className="tag is-medium is-success">Node</span>;   
   const express = <span className="tag is-medium express">Express</span>;
   const mongo = <span className="tag is-medium mongodb">MongoDB</span>;
   const bootstrap = <span className="tag is-medium bootstarp">Bootstrap</span>;
   const amplify = <span className="tag is-medium aws">AWS Amplify</span>;
   const reactRouter = <span className="tag is-medium is-success">React Router</span>;

   const githubPortfolio = 'https://github.com/iDmit9/Personal-website';
   const githubShoppingApp = 'https://github.com/iDmit9/rn-shop-app';
   const githubEmaily = 'https://github.com/iDmit9/emaily';
   const githubAWS = 'https://github.com/iDmit9/Marketplace-on-Amplify';
   const githubBurger = 'https://github.com/iDmit9/burger-builder';
   const githubMealsApp = 'https://github.com/iDmit9/The-meals-app';

   const liveEmaily = 'https://emaily-id.herokuapp.com/';
   const liveBurger = 'https://react-my-burger-f1737.web.app/';

   return (
      <>
         <section className="section portfolio" id="portfolio">
            <div className="container">
               <div className="content has-text-centered">
                  <h2 className="title is-size-3 is-spaced">Portfolio</h2>
               </div>
               <div className="columns">

                  <div className="column is-12-mobile is-4-desktop">
                     <PortfolioItem
                        img={portfolioImg}
                        title='Portfolio'
                        codeLink={githubPortfolio}
                     >
                        This is the website you are currently on.
                        This is my porfolio on {gatsby}
                        {' '}- it's framework based on {react}.
                        Built using technologies such as {bulma}
                        {' '}CSS framework and {graphql}.
                     </PortfolioItem>  

                     <PortfolioItem
                        img={shoppingImg}
                        title='Shopping app'
                        codeLink={githubShoppingApp}
                     >
                        This is a classic shopping app constructed with {reactNative}.
                        It has a list of goods, which is gradually loaded
                        from {firebase} when scrolling using the FlatList component.
                        You can open a detailed description of the product or add it to the cart.
                        In the cart you can delete added products or place an order.
                        It stores in {redux} before sending to db.
                        To view orders use sidedrawer.
                        Navigation implemented with {reactNavigation}.
                        You can also add products or edit previously created.
                     </PortfolioItem>                    
                  </div>

                  <div className="column is-12-mobile  is-4-desktop">
                     <PortfolioItem
                        img={emailyImg}
                        title='Emaily'
                        codeLink={githubEmaily}
                        liveLink={liveEmaily}
                     >
                        Emaily is a mini email surveys service.
                        Created as a fullstack JavaScript application
                        on {react} and {node}.
                        With technologies like {redux}
                        , {express}, {mongo}.
                        This application implements the ability to log in with Google oauth.
                        To send Emails used SendGrid API and for charging the Stripe API is connected in test mode.
                        All received data is stored on mongodb.com and managed using the mongoose plugin.
                        {' '}{bootstrap} used for styling.
                     </PortfolioItem> 

                     <PortfolioItem
                        img={AWSImg}
                        title='Amplify Market'
                        codeLink={githubAWS}
                     >
                        It's a serverless {react} marketplace
                        based on {amplify} and several other services.
                        This is a simple market in which most of the logic is built by Amazon services. Not just AWS Amplify,
                        which generates the majority of {graphql} queries
                        and is responsible for authentication and storing users data in Amazon Cognito User Pool.
                        But also services such as Amazon Elasticsearch, AWS Lambda, Amazon SES are used.
                     </PortfolioItem>                      
                  </div>

                  <div className="column is-12-mobile  is-4-desktop">
                     <PortfolioItem
                        img={burgerImg}
                        title='Burger Builder'
                        codeLink={githubBurger}
                        liveLink={liveBurger}
                     >
                        This is a {react} web application.
                        Built using technologies such as {redux}, {reactRouter}.
                        The application allows you to create a custom burger of four ingredients.
                        Started burger is loaded from the {firebase}
                        . And your orders will be stored there.
                        To order you need to login and you also could signup which is implemented
                        with {firebase} API.
                     </PortfolioItem>  

                     <PortfolioItem
                        img={mealsImg}
                        title='Meals app'
                        codeLink={githubMealsApp}
                     >
                        A simple mobile app using {reactNative}.
                        The application is a small cookbook.
                        The ingredients are divided into categories and each recipe can belong to several categories.
                        Each recipe can be marked as a favorite.
                        Then it will be displayed on the favorites tab, which can be selected at the bottom of the screen.
                     </PortfolioItem>                       
                  </div>

               </div>
            </div>
         </section>
      </>
   )
};

export default Portfolio;
