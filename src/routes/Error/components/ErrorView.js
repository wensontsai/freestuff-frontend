import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './ErrorView.scss'

export const ErrorView = () => (
  <div className='error-view'>
    <h4>You find page that no exist.  Here is duck!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default ErrorView
