import React from 'react';

import './style.scss';

const About = () => (
   <div>
      <section className="section about" id='about'>
         <div className="container center">
            <article className="media">
               <div className="media-content">
                  <div className="content has-text-centered">
                     <h2 className="title is-size-3 is-spaced">About</h2>
                     <p className="subtitle is-size-5 column has-text-left is-three-fifths is-offset-one-fifth">
                        
                        Hello, I'm looking for a job as a Javascript/React developer with small experience.
                        I practiced a lot not only React, but everything that can work with it:
                        Node, Express, Next, React Native, Gatsby, various serverless cloud solutions and APIs (AWS, Firebase, SendGrid). 
                        Part of my code can be viewed on GitHub.
                        And I've been developing software for more than 4 years.
                        I previously worked in development on 1C:Enterprise.
                        Some of the technologies I've worked with are listed below.
                        
                     </p>
                  </div>
                  <div className="column is-half is-offset-one-quarter">
                     <div className='tags tech is-clearfix has-text-centered center'>
                        <span className="tag react">React</span>
                        <span className="tag redux">Redux</span>
                        <span className="tag react-router">React Router</span>
                        <span className="tag gatsby">Gatsby</span>
                        <span className="tag react-native">React Native</span>
                        <span className="tag js">JS</span>
                        <span className="tag html">HTML5</span>
                        <span className="tag css">CSS/SCSS</span>
                        <span className="tag bootstarp">Bootstrap</span>
                        <span className="tag bulma">Bulma</span>
                        <span className="tag firebase">Firebase</span>
                        <span className="tag jest">Jest</span>
                        <span className="tag express">Express</span>
                        <span className="tag mongodb">Mongo</span>
                        
                     </div>
                  </div>
               </div>
            </article>
         </div>
      </section>
   </div>
);

export default About;
