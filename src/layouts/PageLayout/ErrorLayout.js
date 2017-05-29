import React from 'react'
// import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
// import './ErrorLayout.scss'

export const ErrorLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='page-layout__viewport'>
      this page does not exist
      {children}
    </div>
  </div>
)
ErrorLayout.propTypes = {
  children: PropTypes.node,
}

export default ErrorLayout
