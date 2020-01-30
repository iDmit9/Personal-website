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
                        Hello. I have 3+ years of software development. 
                        In recent years, I have dived into web development.
                        I know well: React and its surrounding technologies, pure JavaScript with ES6 syntax. 
                        I also have some knowledge related to Node, Express, Meteor, Next, GraphQL, Gatsby and others.</p>
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
                     </div>
                  </div>
               </div>
            </article>
         </div>
      </section>
   </div>
);

export default About;
