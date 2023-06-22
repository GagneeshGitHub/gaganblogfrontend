import React from 'react'
import { useState } from 'react'
import '../cssfile/listbox.css'

export default function ListsBox({index_id,data_id, heading,setTheContent}) {

    const id = data_id;

  return (
    <div className='listBoxClass' onClick={()=>setTheContent(index_id)}>
        <p className='headingListBox'>{heading}</p>
    </div>
  )
}
