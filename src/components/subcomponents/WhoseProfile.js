import React from 'react'
import '../cssfile/whoseprofile.css'
import {IoIosPerson} from 'react-icons/io'

export default function WhoseProfile({authorName}) {

  return (
    <div className='uploaderProfileSec'>
      <div className="imageCircleDiv">
        <IoIosPerson className='imageInCircle'/>
      </div>
      <div className='authorDetClass'>
        <h4>AUTHOR: </h4>
        <h2>{authorName}</h2>
      </div>
    </div>
  )
}
