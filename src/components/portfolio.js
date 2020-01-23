import React from 'react';
import { FaPlayCircle, FaGithub } from 'react-icons/fa'; 
import './style.scss';

import portfolioImg from '../images/card-portfolio.png';
import emailyImg from '../images/card-emaily.png';
import burgerImg from '../images/card-buter.png';
import shoppingImg from '../images/card-shopping.png';
import mealsImg from '../images/card-meals.png';

const Portfolio = () => {

   return (
      <>
         <section className="section portfolio">
            <div className="container">
               <div className="content has-text-centered">
                  <h2 className="title is-size-3 is-spaced">Portfolio</h2>
               </div>
               <div class="columns is-multiline">
                  <div class="column is-12-mobile is-6-tablet is-4-desktop">
                     <div class="card">
                        <div class="card-image">
                           <figure class="image is-4by3">
                              <img src={portfolioImg} alt="personal website" />
                           </figure>
                        </div>
                        <div class="card-content">
                           <div class="content">
                              <p><span class="title is-4 is-capitalized">Portfolio</span></p>
                              <p>
                                 This is the website you are currently on.
                                 This is my porfolio on <span class="tag is-medium gatsby">Gatsby</span>.
                                 Built using technologies such as <span class="tag is-medium react">React</span>
                                 , <span class="tag is-medium is-primary">Bulma</span>
                                 , <span class="tag is-medium graphql">GraphQL</span>.
                              </p>
                              <div class="columns is-mobile is-multiline buttons">
                                 <div className='column is-mobile view-code' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    > 
                                       <span class="icon">
                                          <FaGithub size='fa-2x' color='black' />   
                                       </span>
                                       <p className='multiline'>View<br/>code</p>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="column is-12-mobile is-6-tablet is-4-desktop">
                     <div class="card">
                        <div class="card-image">
                           <figure class="image is-4by3">
                              <img src={emailyImg} alt="Emaily app" />
                           </figure>
                        </div>
                        <div class="card-content">
                           <div class="content">
                              <p><span class="title is-4 is-capitalized">Emaily</span></p>
                              <p>
                                 Emaily is a mini email surveys service.
                                 Created as a fullstack JavaScript application
                                 on <span class="tag is-medium react">React</span> and <span class="tag is-medium is-success">Node</span>.
                                 With technologies like <span class="tag is-medium is-danger">Redux</span>
                                 , <span class="tag is-medium is-success">React Router</span>
                                 , <span class="tag is-medium express">Express</span>
                                 , <span class="tag is-medium mongodb">MongoDB</span>.
                                 This application implements the ability to log in with Google oauth.
                                 To send Emails used SendGrid API and for charging the Stripe API is connected in test mode.
                                 All received data is stored on mongodb.com and managed using the mongoose plugin
                                 . <span class="tag is-medium bootstarp">Bootstrap</span> used for styling.
                              </p>
                              <div class="columns is-mobile is-multiline buttons">
                                 <div className='column is-mobile view-code' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaGithub size='fa-2x' color='black' />   
                                       </span>
                                       <p className='multiline'>View<br/>code</p>
                                    </a>
                                 </div>
                                 {/* <div className="column is-mobile"></div> */}
                                 <div className='column is-mobile' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaPlayCircle size='fa-2x' color='black' />   
                                       </span>
                                       <span className='multiline'>Live<br/>app</span>
                                    </a>
                                 </div>
                              </div>
                              {/* <br />
                              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="column is-12-mobile is-6-tablet is-4-desktop">
                     <div class="card">
                        <div class="card-image">
                           <figure class="image is-4by3">
                              <img src={burgerImg} alt="Burger builder" />
                           </figure>
                        </div>
                        <div class="card-content">

                           <div class="content">
                              <p><span class="title is-4 is-capitalized">Burger Builder</span></p>
                              <p>
                                 This is a <span class="tag is-medium react">React</span> web application.
                                 Built using technologies such as <span class="tag is-medium is-danger">Redux</span>
                                 , <span class="tag is-medium is-success">React Router</span>.
                                 The application allows you to create a custom burger of four ingredients.
                                 Started burger is loaded from the <span class="tag is-medium is-warning">Firebase</span>. To order you need to login which is implemented with firebase.
                              </p>
                              <div class="columns is-mobile is-multiline buttons">
                                 <div className='column is-mobile view-code' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaGithub size='fa-2x' color='black' />   
                                       </span>
                                       <p className='multiline'>View<br/>code</p>
                                    </a>
                                 </div>
                                 {/* <div className="column is-mobile"></div> */}
                                 <div className='column is-mobile' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaPlayCircle size='fa-2x' color='black' />   
                                       </span>
                                       <span className='multiline'>Live<br/>app</span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div class="card is-shadowless is-slightly-rounded"> */}

                  <div class="column is-12-mobile is-6-tablet is-4-desktop">
                     <div class="card">
                        <div class="card-image">
                           <figure class="image is-4by3">
                              <img src={shoppingImg} alt="Shopping app" />
                           </figure>
                        </div>
                        <div class="card-content">

                           <div class="content">
                              <p><span class="title is-4 is-capitalized">Shopping app</span></p>
                              <p>
                                 This is a classic shopping app constructed with <span class="tag is-medium is-info">React Native</span>.
                                 It has a list of goods, which is gradually loaded when scrolling using the FlatList component.
                                 You can open a detailed description of the product or add it to the cart.
                                 In the cart you can delete added products or place an order.
                                 To view orders use sidedrawer.
                                 You can also add products or edit previously created.
                              </p>
                              <div class="columns is-mobile is-multiline buttons">
                                 <div className='column is-mobile view-code' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaGithub size='fa-2x' color='black' />   
                                       </span>
                                       <p className='multiline'>View<br/>code</p>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="column is-12-mobile is-6-tablet is-4-desktop">
                     <div class="card">
                        <div class="card-image">
                           <figure class="image is-4by3">
                              <img src={mealsImg} alt=" " />
                           </figure>
                        </div>
                        <div class="card-content">

                           <div class="content">
                              <p><span class="title is-4 is-capitalized">Meals app</span></p>
                              <p>
                                 A simple mobile app using <span class="tag is-medium is-info">React Native</span> .
                                 The application is a small cookbook.
                                 The ingredients are divided into categories and each recipe can belong to several categories.
                                 Each recipe can be marked as a favorite.
                                 Then it will be displayed on the favorites tab, which can be selected at the bottom of the screen.
                              </p>
                              <div class="columns is-mobile is-multiline buttons">
                                 <div className='column is-mobile view-code' >
                                    <a 
                                       href='https://github.com/iDmit9/Personal-website' 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="button is-medium "
                                    >
                                       <span class="icon">
                                          <FaGithub size='fa-2x' color='black' />   
                                       </span>
                                       <p className='multiline'>View<br/>code</p>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   )
};

export default Portfolio;


