import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
    <div>
        <div id='header' className='credit'>
            HEADER
            <h4>Free stuff and shit.</h4>
            <div className='links'>
                <ul>
                    <li><a href='listings'>listings</a></li>
                    <li><a href='listings'>listings again></a></li>
                </ul>
            </div>
        </div>
        <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
        <p>1.  check auth state.</p>
        <p>2.  redirect to /dashboard if logged in</p>
        <p>3.  </p>
        <div id='footer' className='credit'>
            FOOTER
        </div>
    </div>
)

export default HomeView
