import React from 'react';
import { FaPlayCircle, FaGithub } from 'react-icons/fa';
import '../style.scss';

const PortfolioItem = ({ img, title, codeLink, liveLink, children }) => {
   return (
      <div className="card">
         <div className="card-image">
            <figure className="image is-4by3">
               <img src={img} alt="personal website" />
            </figure>
         </div>
         <div className="card-content">
            <div className="content">
               <p><span className="title is-4 is-capitalized">{title}</span></p>
               <p>{children}</p>
               <div className="columns is-mobile is-multiline buttons">
                  <div className='column is-mobile view-code' >
                     <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-medium "
                     >
                        <span className="icon">
                           <FaGithub className='icon-fa-2x' color='black' />
                        </span>
                        <p className='multiline'>View<br />code</p>
                     </a>
                  </div>
                  {liveLink &&
                     <div className='column is-mobile' >
                        <a
                           href={liveLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="button is-medium "
                        >
                           <span className="icon">
                              <FaPlayCircle className='icon-fa-2x' color='black' />
                           </span>
                           <span className='multiline'>Live<br />app</span>
                        </a>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   )
};

export default PortfolioItem;