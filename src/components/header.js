import React from 'react';
//import { FaGithub } from 'react-icons/fa';

import './style.scss';

//import gatsbyLogo from '../images/gatsby-icon.png';
//import bulmaLogo from '../images/bulma-logo.png';
//import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<>
		<section className='hero gradientBg is-fullheight'>
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content has-text-centered">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Ivanov Dmitriy
							</h1>
							<p className="subtitle has-text-white is-size-4">
								React
								<span className="subtitle has-text-black is-size-4">
									{' '}/{' '}
									<span className="subtitle has-text-warning is-size-4">
										JavaScript
								 	</span>
									{' '}developer
								</span>
							</p>
							<div className='tags tech is-clearfix has-text-centered'>
								<span class="tag is-black react">React</span>								
								<span class="tag is-danger">Redux</span>
								<span class="tag is-white">Redux Thunk</span>
								<span class="tag is-success">React Router</span>
								<span class="gatsby tag ">Gatsby</span> 
								<br/>
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
		
	</>
);

export default Header;
