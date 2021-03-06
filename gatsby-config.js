module.exports = {
	siteMetadata: {
		title: 'Ivanov Dmitriy - React / JavaScript developer',
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
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
