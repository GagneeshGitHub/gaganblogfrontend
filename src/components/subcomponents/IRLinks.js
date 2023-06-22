import React from 'react'
import { Link } from 'react-router-dom'
import '../cssfile/navlink.css'

export default function IRLinks() {
  return (
    <>
        <Link className='navLink' to="/signup"><p className='navBtnLink'>SIGNUP</p></Link>
        <Link className='navLink' to="/login"><p className='navBtnLink'>LOGIN</p></Link>
        <Link className='navLink' to="/"><p className='navBtnLink'>HOME</p></Link>
    </>
  )
}
