import React from 'react'
import './cssfile/listsection.css'
import ListsBox from './subcomponents/ListsBox'

export default function ListSection({searchResult, setTheContent}) {
  return (
    <div className='listSectionClass'>
        {
          searchResult.length === 0 ? <div>Search on empty string to get all the post list</div> : null
        }
        {searchResult.map((elem,index)=>{
            return <ListsBox key={index} setTheContent={setTheContent} index_id={index} data_id={elem[0]} heading={elem[1]}/>
        })}
    </div>
  )
}
