import React from 'react'
import '../cssfile/userprofileuploads.css'

export default function UserProfileUploads({deleteMyPost,heading,post_id,setContentForIndex,post_index}) {

  return (
    <>
    <div className='uploadBox' onClick={()=>{setContentForIndex(post_index)}}>
        {heading}
    </div>
    <div className="delUpBtn">
          <button onClick={()=>deleteMyPost(post_id)} className='postDelBtn'>DELETE</button>
    </div>
    </>
  )
}
