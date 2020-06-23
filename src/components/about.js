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


                        {/* Hello, I have been developing software for more than 4 years.
                        And now I'm looking for a job as an experienced junior Javascript/React developer. 
                        Junior because there is no significant experience in web development. And experienced for two reasons.
                        First, I practiced a lot in Javascript and React, part of my code can be viewed on github.
                        I practiced not only React, but everything that can work with it: Node, Next, Electron, 
                        various serverless cloud solutions and connecting a ready-made API (AWS, Firebase, SendGrid).
                        And the second reason - I previously worked in development on 1C:Enterprise (it's a mixture of Visual Basic and SQL). 
                        In addition, I sometimes practice in solving various exercises, such as in Codewars. */}

                        {/* Hello. I have 3+ years of software development. 
                        In recent years, I have dived into web development.
                        I know well: React and its surrounding technologies, pure JavaScript with ES6 syntax. 
                        I also have some knowledge related to Node, Express, Meteor, Next, GraphQL, Gatsby and others. */}
                     </p>
                  </div>
                  <div className="column is-half is-offset-one-quarter">
                     <div className='tags tech is-clearfix has-text-centered center'>
                        <span className="tag is-black react">React</span>
                        <span className="tag is-danger">Redux</span>
                        <span className="tag is-success">React Router</span>
                        <span className="gatsby tag ">Gatsby</span>
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
