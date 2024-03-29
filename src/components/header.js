import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            linkedin
            github
          }
        }
      }
    `
  );
  return (
    <section className='hero gradientBg is-fullheight'>
      <Navbar />
      <div className='container center is-flex-direction-column'>
        <article className='media'>
          <div className='media-content'>
            <div className='content has-text-centered'>
              <h1 className='is-uppercase is-size-1 has-text-white'>
                Ivanov Dmitriy
              </h1>
              <p className='subtitle has-text-white is-size-4 is-spaced'>
                React
                <span className='subtitle has-text-black is-size-4'>
                  &nbsp;/&nbsp;
                  <span className='subtitle has-text-warning is-size-4'>
                    JavaScript
                  </span>
                  &nbsp;developer
                </span>
              </p>
              <div className='center has-text-black'>
                <span className='icon'>
                  <a href={data.site.siteMetadata.linkedin}>
                    <FaLinkedin className='icon-fa-2x' color='black' />
                  </a>
                </span>
                <span className='icon'>
                  <a href={data.site.siteMetadata.github}>
                    <FaGithub className='icon-fa-2x' color='black' />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <FaArrowDown className='icon-fa-2x arrow-down' color='black' />
    </section>
  );
};

export default Header;
