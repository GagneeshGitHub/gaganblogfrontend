import React from "react";
import "./cssfile/loginsection.css";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "./commonState/UrlVar";

export default function Login({setLoggedIn}) {

  const router_navigate = useNavigate()

  const loginPhp = ()=>{
    let username = document.getElementById("usernameId").value
    let password = document.getElementById("passwordId").value

    username = username.replaceAll(" ","")

    if(username===""){
      console.log("Please enter the username")
      return
    }

    let formData = new FormData()
    formData.append('blogUsername',username)
    formData.append('blogPassword',password)

    let url = backendUrl.concat("/loginChecking.php")

    fetch(url,{
      method: 'POST',
      body: formData,
    })
    .then(data=>data.json())
    .then(data=>{
      if(data[0]===true){
        setLoggedIn(true);
        console.log("Data object after login is: ", data)
        document.getElementById("warningText").style.display = "none"
        localStorage.setItem("GBLOGUSER",username);
        localStorage.setItem("GBLOGPASSWORD",password);
        localStorage.setItem("GBLOGAUT_ID",data[1]);
        localStorage.setItem("GBLOGAUT_NAME",data[2]);
        router_navigate("/");
      } else {
        document.getElementById("usernameId").value = ""
        document.getElementById("passwordId").value = ""
        document.getElementById("warningText").style.display = "block"
      }
    })
  }

  return (
    <div className="loginSection">
      <div className="loginForm">
        <h3 className="loginHeading">LOG IN</h3>
        <div id="warningText" className="loginWarning">Username/Password is wrong please try again. If not logged in please SIGN UP</div>
        <div className="userDiv">
          <label htmlFor="">USERNAME</label>
          <input id="usernameId" name="usernameInput" type="text" />
        </div>
        <div className="passDiv">
          <label htmlFor="">PASSWORD</label>
          <input id="passwordId" name="passwordInput" type="password" />
        </div>
        <div className="btnDiv">
          <button className="loginBtn" onClick={()=>{loginPhp()}}>LOG-IN</button>
        </div>
      </div>
    </div>
  );
}
