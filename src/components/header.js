import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import './style.scss';

import Navbar from './navbar';

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
	)
	return (
			<section className='hero gradientBg is-fullheight'>
				<Navbar />
				<div className="container center">
					<article className="media">
						<div className="media-content">
							<div className="content has-text-centered">
								<h1 className="is-uppercase is-size-1 has-text-white">
									Ivanov Dmitriy
								</h1>
								<p className="subtitle has-text-white is-size-4 is-spaced">
									React
									<span className="subtitle has-text-black is-size-4">
										{' '}/{' '}
										<span className="subtitle has-text-warning is-size-4">
											JavaScript
								 	</span>
										{' '}developer
								</span>
								</p>
								<div className='center has-text-black'>
										<span className='icon'>
											<a href={data.site.siteMetadata.linkedin}>
												<FaLinkedin className='icon-fa-2x' color='black' />
											</a>
										</span>
										&nbsp;
           							 <span className='icon'>
											<a href={data.site.siteMetadata.github}>
											<FaGithub className='icon-fa-2x' color='black' /> 
											</a>
										</span>
										&nbsp;
								</div>

							</div>
						</div>
					</article>
				</div>
			</section>
	)
};

export default Header;
