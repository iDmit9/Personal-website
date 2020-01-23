import React from 'react';

import './style.scss';

const About = () => (
   <div>
      <section className="section">
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
                  <div class="column is-half is-offset-one-quarter">
                     <div className='tags tech is-clearfix has-text-centered center'>
                        <span class="tag is-black react">React</span>
                        <span class="tag is-danger">Redux</span>
                        <span class="tag ">Redux Thunk</span>
                        <span class="tag is-success">React Router</span>
                        <span class="gatsby tag ">Gatsby</span>
                        <br />
                        <span class="tag is-info">React Native</span>
                        <span class="tag is-warning">JS</span>
                        <span class="tag is-danger">HTML5</span>
                        <span class="tag is-link">CSS/SCSS</span>
                        <span class="tag bootstarp">Bootstrap</span>
                        <span class="tag is-primary">Bulma</span>
                        <span class="tag is-warning">Firebase</span>
                     </div>
                  </div>
               </div>
            </article>
         </div>
      </section>
   </div>
);

export default About;
