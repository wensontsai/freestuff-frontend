import React from 'react'
import PropTypes from 'prop-types'

import './Listings.scss'

export const Listings = ({ listings, increment, doubleAsync }) => (
    <div id='listings'>
        <div className='header'>        
            <span className='name'>Listings</span>
        </div>
        <div className='content'>    
            <p>blah</p>
        </div>
    </div>
)
Listings.propTypes = {
  Listings: PropTypes.number,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Listings
