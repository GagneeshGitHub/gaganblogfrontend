import React from 'react'
import './cssfile/blogpage.css'
import WhoseProfile from './subcomponents/WhoseProfile'
import UserPost from './UserPost'
import SearchSection from './SearchSection'
import ListSection from './ListSection'
import { useState } from 'react'
import { backendUrl } from './commonState/UrlVar'

export default function BlogPage({searchResutl, setSearchResult, currentContent, setCurrentContent, authorName, setAuthorName}) {

  const setTheContent = (index)=>{
    console.log("Search Result is: ",searchResutl)
    let content = searchResutl[index][2]
    let author_id = searchResutl[index][3]

    let formData = new FormData()
    formData.append('authorId',author_id)

    fetch(`${backendUrl}/getAuthor.php`,{
      method: 'POST',
      body: formData,
    })
    .then(data=>data.json())
    .then(data=>{
      setAuthorName(data[1])
      setCurrentContent(content)
    })
  }

  return (
    <div className='blogPageClass'>
        <div className="leftBlogContent">
            <WhoseProfile authorName={authorName}/>
            <UserPost content={currentContent}/>
        </div>
        <div className="rightSearchContent">
            <SearchSection setSearchResult={setSearchResult}/>
            <ListSection searchResult={searchResutl} setTheContent={setTheContent}/>
        </div>
    </div>
  )
}
