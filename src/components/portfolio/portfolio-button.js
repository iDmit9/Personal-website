import React from 'react';
import { FaPlayCircle, FaGithub } from 'react-icons/fa';

const PortfolioButton = ({ link, type }) => {
   let buttonIcon = null;
   let buttonText = '';

   if (type === 'code') {
      buttonIcon = <FaGithub className='icon-fa-2x' color='black' />;
      buttonText = <p className='multiline'>View<br />code</p>;
   } else if (type === 'live') {
      buttonIcon = <FaPlayCircle className='icon-fa-2x' color='black' />;      
      buttonText = <p className='multiline'>Live<br />app</p>;
   }

   return (
      <div className='column is-mobile' >
         <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-medium "
         >
            <span className="icon">
               {buttonIcon}               
            </span>
            {buttonText}
         </a>
      </div>
   )
}

export default PortfolioButton