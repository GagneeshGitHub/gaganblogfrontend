import React from 'react'
import { Link } from 'react-router-dom'
import '../cssfile/irprofile.css'
import {CgProfile} from 'react-icons/cg'

export default function IRProfile() {
  return (
    <>
        <Link className='navLinkPr' to="/myprofile"><CgProfile className='profileIcon'/></Link>
        <Link className='navLinkPr' to="/upload"><p className='navBtnLinkPr'>UPLOAD</p></Link>
        <Link className='navLinkPr' to="/"><p className='navBtnLinkPr'>HOME</p></Link>
    </>
  )
}
