import React from 'react';

import PortfolioButton from './portfolio-button';

const PortfolioItem = ({ img, alt, title, codeLink, liveLink, children }) => {
   return (
      <div className="card">
         <div className="card-image">
            <figure className="image is-4by3">
               <img src={img} alt={alt} />
            </figure>
         </div>
         <div className="card-content">
            <div className="content">
               <p><span className="title is-4 is-capitalized">{title}</span></p>
               <p>{children}</p>
               <div className="columns is-mobile is-multiline buttons">
                  <PortfolioButton link={codeLink} type='code' />
                  {liveLink && <PortfolioButton link={liveLink} type='live' />}
               </div>
            </div>
         </div>
      </div>
   )
};

export default PortfolioItem;