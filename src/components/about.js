import React from 'react';

const About = () => (
   <div>
      <section className="section about" id='about'>
         <div className="container center">
            <article className="media">
               <div className="media-content">
                  <div className="content has-text-centered">
                     <h2 className="title is-size-3 is-spaced">About</h2>
                     <p className="subtitle is-size-5 column has-text-left is-three-fifths is-offset-one-fifth">
                        
                        Hello, I'm looking for a job as a Frontend/React developer with small experience.
                        I know well React and its surrounding technologies (Redux, JavaScript, HTML, CSS etc.). 
                        I practiced a lot not only React, but everything that can work with it:
                        Node, Express, Next, React Native, Gatsby, various serverless cloud solutions and APIs (AWS, Firebase, SendGrid, etc.). 
                        Part of my code can be viewed on GitHub.
                        I previously worked in software development on 1C:Enterprise.
                        Some of the technologies I have experience with are listed below.
                        
                     </p>
                  </div>
                  <div className="column is-half is-offset-one-quarter center">
                     <div className='tags tech is-clearfix has-text-centered center'>
                        <span className="tag react">React</span>
                        <span className="tag redux">Redux</span>
                        <span className="tag react-router">React Router</span>
                        <span className="tag gatsby">Gatsby</span>
                        <span className="tag react-native">React Native</span>
                        <span className="tag ts">TypeScript</span>
                        <span className="tag js">JavaScript</span>
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
