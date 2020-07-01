import React from 'react';

import './style.scss';

const About = () => (
   <div>
      <section className="section" id='about'>
         <div className="container center">
            <article className="media">
               <div className="media-content">
                  <div className="content has-text-centered">
                     <h2 className="title is-size-3 is-spaced">About</h2>
                     <p className="subtitle is-size-5 column is-three-fifths is-offset-one-fifth">
                        
                        Hello, I have been developing software for more than 4 years.
                        And now I'm looking for a job as an experienced junior Javascript/React developer. 
                        Junior because there is no significant experience in web development. 
                        And experienced because I practiced a lot in Javascript and React, part of my code can be viewed on GitHub.
                        I practiced not only React, but everything that can work with it: Node, Next, Electron, 
                        various serverless cloud solutions and APIs (AWS, Firebase, SendGrid).
                        Plus I previously worked in development on 1C:Enterprise (based on Visual Basic and SQL). 
                        
                     </p>
                  </div>
                  <div className="column is-half is-offset-one-quarter">
                     <div className='tags tech is-clearfix has-text-centered center'>
                        <span className="tag react">React</span>
                        <span className="tag is-danger">Redux</span>
                        <span className="tag is-success">React Router</span>
                        <span className="tag gatsby">Gatsby</span>
                        <span className="tag is-info">React Native</span>
                        <span className="tag is-warning">JS</span>
                        <span className="tag is-danger">HTML5</span>
                        <span className="tag is-link">CSS/SCSS</span>
                        <span className="tag bootstarp">Bootstrap</span>
                        <span className="tag is-primary">Bulma</span>
                        <span className="tag is-warning">Firebase</span>
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
