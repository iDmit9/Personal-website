import React from 'react'
import { Link } from 'gatsby'
import '../style.scss'

const NotFoundPage = () => (
  <section className='hero gradientBg is-fullheight'>    
    <div className='container not-found'>
      <h1 className='has-text-white has-text-weight-bold is-family-code'>404</h1>
      <h2 className='has-text-white is-size-3 has-text-weight-semibold is-family-code'>NOT FOUND</h2>
      <p className='has-text-black is-size-5'>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <Link className='is-size-5' to='/'>
          &#62; Go to Homepage {/* > Go to Homepage */}
        </Link>
      </p>
    </div>
  </section>
)

export default NotFoundPage
