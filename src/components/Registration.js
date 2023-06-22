import React from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from './commonState/UrlVar';
import './cssfile/registration.css'

export default function Registration() {

  const navigate = useNavigate()
  let to_go_username = false;
  let to_go_password = false;
  let to_go_author = false;

  const checkForRightValue = (inputField)=>{
    

    if(inputField==="username"){
      let userField = document.getElementById("usernameId")
      let userWarning = document.getElementById("usernameWarning")
      let userValue = userField.value
     if(userValue[0]===" "){
        userWarning.innerHTML = "Username should not contain spaces in front and inbetween."
        userWarning.style.display = "inline"
      } else if(userValue.length<5) {
        userWarning.innerHTML = "Username should not be less than 6 words"
        userWarning.style.display = "inline"
        to_go_username = false
      } else {
        userWarning.style.display = "none"
        to_go_username = true
      }
    }
    if(inputField==="password"){
      let passwordField = document.getElementById("passwordId")
      let passwordWarning = document.getElementById("passwordWarning")
      let passValue = passwordField.value
      if(passValue.length<6){
        passwordWarning.innerHTML = "Password should be at least 7 words"
        passwordWarning.style.display = "inline"
        to_go_password =false;
      } else {
        passwordWarning.style.display = "none"
        to_go_password = true;
      }
    }
    if(inputField==="author"){
      let authorField = document.getElementById("authorId")
      let authorWarning = document.getElementById("authorWarning")
      let authorValue = authorField.value
      if(authorValue.length<6){
        authorWarning.innerHTML = "Should be at least 7 letter"
        to_go_author = false;
      } else {
        to_go_author = true;
      }
    }
  }

  const chkFormAndSignUp = ()=>{
    let userField = document.getElementById("usernameId").value
    let passField = document.getElementById("passwordId").value
    let authorField = document.getElementById("authorId").value

    let firstWarning = document.getElementById("usernameWarning")

    let formData = new FormData();
    formData.append('username',userField);
    formData.append('password',passField)
    formData.append('author',authorField)

    if(userField.trim()==="" || passField.trim()==="" || authorField.trim()===""){
      firstWarning.innerHTML = "All of the field should be filled up"
      firstWarning.style.display = "inline"
      return
    }
    
    if(to_go_author && to_go_password && to_go_username){
    fetch(`${backendUrl}/signUp.php`,
      {
        method: 'POST',
        body: formData,
      }
    )
    .then(data=>data.json())
    .then(data=>{
      if(data[0]==="Successfull"){
        navigate("/login")
        return
      } 
      resetAndWarn();
    }
    )
  }
  }

  //Resetting the value and warning
  const resetAndWarn = ()=>{
    document.getElementById("usernameId").value = ""
    document.getElementById("passwordId").value = ""
    let firstWarning = document.getElementById("usernameWarning")
    firstWarning.innerHTML = "Username already exist, try other username"
    firstWarning.style.display = "inline"
  }

  return (
    <div className="signUpSection">
      <div className="signUpForm">
        <h3 className="signUpHeading">SIGN UP</h3>
        <div id="usernameWarning" className="signUpWarning"></div>
        <div className="userSignUpDiv">
          <label htmlFor="">USERNAME</label>
          <input onChange={()=>{checkForRightValue("username")}} id="usernameId" name="usernameInput" type="text" />
        </div>
        <div id="passwordWarning" className="signUpWarning"></div>
        <div className="passSignUpDiv">
          <label htmlFor="">PASSWORD</label>
          <input onChange={()=>{checkForRightValue("password")}} id="passwordId" name="passwordInput" type="password" />
        </div>
        <div id="authorWarning" className="signUpWarning"></div>
        <div className="authorSignUpDiv">
          <label htmlFor="">ENTER AUTHOR NAME</label>
          <input onChange={()=>{checkForRightValue("author")}} id="authorId" name="usernameInput" type="text" />
        </div>
        <div className="btnSignUpDiv">
          <button className="loginSignUpBtn" onClick={()=>{chkFormAndSignUp()}}>LOG-IN</button>
        </div>
      </div>
    </div>
  )
}
