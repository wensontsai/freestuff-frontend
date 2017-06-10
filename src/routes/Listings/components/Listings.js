import React from 'react'
import PropTypes from 'prop-types'

import './Listings.scss'

export const Listings = ({ listings, increment, doubleAsync, initialize, getAll }) => (
    <div id='listings'>
        <div className='header'>        
            <span className='name'>Listings</span>
        </div>
        <div className='content'>    
            <p>blah</p>
            <p>{listings.description}</p>
            <button 
                onClick={getAll}>
                    press me
            </button>
        </div>
    </div>
)
Listings.propTypes = {
  Listings: PropTypes.number,
  increment: PropTypes.func.isRequired,
  // doubleAsync: PropTypes.func.isRequired
}

export default Listings
