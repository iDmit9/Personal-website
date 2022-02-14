import React, {useState} from 'react';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	return (
	<div className="hero-head">
		 <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<button 
						className={`button link-button navbar-burger burger ${isActive ? 'is-active' : ''}`}
						aria-label="menu" 
						aria-expanded="false" 
						data-target="navbarMenuHeroA"
						onClick={() => setIsActive(!isActive)}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>						
      				<span aria-hidden="true"></span>
					</button>
				</div>
				<div id="navbarMenuHeroA" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className="navbar-end has-text-centered">
						<a href='#about' className="navbar-item">
							About
						</a>
						<a href='#portfolio' className="navbar-item">
							Portfolio
						</a>
						<a href="#contact" className="navbar-item">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav> 
	</div>
)
}

export default Navbar;
