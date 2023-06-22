import React from 'react'
import './cssfile/userpost.css'

export default function UserPost({content}) {
  return (
    <div className='userPostClass'>
        {content}
    </div>
  )
}
