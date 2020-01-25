import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            react
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>          
          <p className='is-size-5'>            
            Build with <a href={data.site.siteMetadata.gatsby}>Gatsby</a> and <a href={data.site.siteMetadata.react}>React</a>. 
            Styled with <a href={data.site.siteMetadata.bulma}>Bulma</a>. 
            The code is available at <a href={data.site.siteMetadata.github}>
              Github
              <span className="icon">
                <FaGithub size='fa-2x' />   
              </span>
            </a>.           
            
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
