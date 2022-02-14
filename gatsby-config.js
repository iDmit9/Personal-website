module.exports = {
	siteMetadata: {
		title: 'Ivanov Dmitriy - React / Frontend developer',
		author: 'Ivanov Dmitriy',
		description: 'My web portfolio on Gatsby + Bulma.',
		keywords: `React developer, React, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Web Developer, CSS3, SCSS, HTML5`,
		github: `https://github.com/iDmit9`,
		linkedin: `https://www.linkedin.com/in/dmitriy-react-dev/`,
		gatsby: 'https://www.gatsbyjs.org/',
		react: 'https://reactjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://idmit9.now.sh/`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'React Portfolio',
				short_name: 'Portfolio',
        description: `React, Frontend, JavaScript web portfolio.`,
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
	]
};
