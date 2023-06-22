import React from 'react'
import './cssfile/searchsection.css'
import {FiSearch} from 'react-icons/fi'
import { backendUrl } from './commonState/UrlVar'


export default function SearchSection({setSearchResult}) {

    const searchSqlPhp = ()=>{
        var search_str = document.getElementById('searchId').value
        let formData = new FormData()
        formData.append('searchString',search_str)

        fetch(`${backendUrl}/searchHeading.php`,{
          method: 'POST',
          body: formData
        }).then(data=>data.json()).then(data=>setSearchResult(data))
    }

  return (
    <div className='searchSectionClass'>
        <input id='searchId' type="text" placeholder='Search Here' className='searchInput'/>
        <button className='searchButton' onClick={()=>{searchSqlPhp()}}><FiSearch className='fiSearchClass'/></button>
    </div>
  )
}
