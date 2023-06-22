import React from 'react'
import './cssfile/userprofile.css'
import {IoIosPerson} from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
import UserProfileUploads from './subcomponents/UserProfileUploads'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from './commonState/UrlVar'

export default function UserProfile({setLoggedIn,setCurrentContent,setAuthorName}) {

    const [username,setUsername] = useState(localStorage.getItem("GBLOGUSER"))
    const [uploadListArr,setUploadList] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        fetchUploadedContent()
    },[])

    const fetchUploadedContent = ()=>{
        let username = localStorage.getItem("GBLOGUSER")
        let password = localStorage.getItem("GBLOGPASSWORD")

        let formData = new FormData()
        formData.append('blogusername',username)
        formData.append('blogpassword',password)

        fetch(`${backendUrl}/getAllUploads.php`,{
            method: 'POST',
            body: formData,
        })
        .then(data=>data.json())
        .then(data=>{
            setUploadList(data)
        })
    }

    const logout = ()=>{
        localStorage.removeItem("GBLOGUSER");
        localStorage.removeItem("GBLOGPASSWORD");
        localStorage.removeItem("GBLOGAUT_ID")
        localStorage.removeItem("GBLOGAUT_NAME")
        localStorage.removeItem("username")
        setLoggedIn(false)
        navigate("/")
    }

    const setContentForIndex = (index)=>{
        setCurrentContent(uploadListArr[index][2]);
        setAuthorName(localStorage.getItem("GBLOGAUT_NAME"));
        navigate("/")
    }

    const deleteMyPost = (post_id)=>{

        if(window.confirm()===false){
            return;
        }

        let myusername = localStorage.getItem("GBLOGUSER")
        let mypassword = localStorage.getItem("GBLOGPASSWORD")

        let formData = new FormData()
        formData.append('blogusername',myusername)
        formData.append('blogpassword',mypassword)
        formData.append('postid',post_id)

        fetch(`${backendUrl}/deleteThePost.php`,{
            method: 'POST',
            body: formData,
        })
        .then(data=>data.json())
        .then(data=>{
            if(data==="Successfull"){
                alert("Delete was successfull")
                fetchUploadedContent()
            }
        })
    }

  return (
    <div className='userProfileClass'>
        <div className='innSectionUPC'>
            <div className='userProfileImage'>
                <IoIosPerson className='profileIconUPC'/>
            </div>
            <div className='usernameDivUPC'>{username}</div>
            <div className="uploadList">
                {
                    uploadListArr.map((elem,index)=>{
                        let heading = elem[1]
                        let post_id = elem[0]
                        // return <p>Hello world</p>
                        return <UserProfileUploads deleteMyPost={deleteMyPost} setContentForIndex={setContentForIndex} key={index} heading={heading} post_id={post_id} post_index={index}/>
                    })
                }
            </div>
            <button onClick={()=>{logout()}} className='logoutBtn'>LOGOUT</button>
        </div>
    </div>
  )
}
