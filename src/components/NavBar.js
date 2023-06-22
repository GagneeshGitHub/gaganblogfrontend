import React from 'react'
import './cssfile/navbar.css'
import { Link } from 'react-router-dom'
import InsideRightDiv from './subcomponents/InsideRightDiv'

export default function NavBar({loggedIn}) {
  return (
    <nav className='navBar'>
        <div className='leftNavDiv'>
            <h1 className='mainLogo'>GAGAN-BLOG'<p className='sWord'>S</p></h1>
        </div>
        <div className='rightNavDiv'>
            <InsideRightDiv loggedIn={loggedIn}/>
        </div>
    </nav>
  )
}
