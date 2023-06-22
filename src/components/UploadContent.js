import React from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from './commonState/UrlVar';
import './cssfile/uploadcontent.css'

export default function UploadContent() {

  let go_heading = false;
  let go_content = false;
  const navigate = useNavigate()

  const checkInput = (typeIs)=>{
    
    if(typeIs==="heading"){
      let headingInput = document.getElementById("headingInput").value
      let headingWarning = document.getElementById("uploadHeadingWarn");

      if(headingInput.length<5){
        headingWarning.innerHTML = "Should contain at least 6 words"
        headingWarning.style.display = "inline"
        go_heading=false
      } else {
        headingWarning.style.display = "none"
        go_heading=true
      }

    }


    if(typeIs==="content"){
      let contentInput = document.getElementById("contentInput").value
      let contentWarning = document.getElementById("uploadContentWarn")
    
      if(contentInput.length<6){
        contentWarning.innerHTML = "Should contain al least 7 words"
        contentWarning.style.display = "inline"
        go_content=false
      } else {
        contentWarning.style.display = "none"
        go_content=true
      }
    }
  }

  // Upload the content
  const uploadContent = ()=>{
    let headingIs = document.getElementById("headingInput").value
    let contentIs = document.getElementById("contentInput").value

    if(headingIs.length===0 || contentIs.length===0){
      return
    }

    if(go_content && go_heading){
      let userName = localStorage.getItem("GBLOGUSER");
      let password = localStorage.getItem("GBLOGPASSWORD");
      let author_id = localStorage.getItem("GBLOGAUT_ID")

      let formData = new FormData()
      formData.append('blogusername',userName)
      formData.append('blogpassword',password)
      formData.append('author_id',author_id)
      formData.append('heading',headingIs)
      formData.append('content',contentIs)

      fetch(`${backendUrl}/uploadPost.php`,{
        method: 'POST',
        body: formData,
      })
      .then(data=>data.json())
      .then(data=>{
        console.log("data is: ", data);
        if(data==="Successfull"){
          console.log("Successfuly uploaded the post")
          navigate("/")
        }
      })
    }
  }

  return (
    <div className='uploadContentClass'>
      <div className="innerUploadContent">
        <div className="postHeader">
          <p className='textHeading'>Heading</p>
          <div id='uploadHeadingWarn' className='uploadWarning'></div>
          <input id='headingInput' className='headingInput' type="text" name='uploadHeading' onChange={()=>{checkInput("heading")}} />
        </div>
        <div className="postContent">
          <p className='textHeading'>Content</p>
          <div id='uploadContentWarn' className='uploadWarning'></div>
          <textarea id='contentInput' className='contentTextArea' type="text" name='uploadContent' onChange={()=>{checkInput("content")}}></textarea>
        </div>
        <div className="uploadBtnDiv">
          <button className='uploadBtn' onClick={()=>{uploadContent()}}>UPLOAD</button>
        </div>
      </div>
    </div>
  )
}
