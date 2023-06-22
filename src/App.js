import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import BlogPage from './components/BlogPage';
import NavBar from './components/NavBar';
import { useState } from 'react';
import UserProfile from './components/UserProfile';
import UploadContent from './components/UploadContent';
import { useEffect } from 'react';

function App() {

  const [loggedIn,setLoggedIn] = useState(false)

  // Got from blog page all the states
  const [searchResutl,setSearchResult] = useState([])
  const [currentContent,setCurrentContent] = useState("Hi, there. My name is Gagneesh Vimal. I am the developer of this website. This website is developed with React Js, Php and MySql database. I hope you will like this website. You can upload your content/post to the website by login and upload link in the navigation bar (you will only see that after you have logged in). This website is maily created to show my web development skill with React and php. I am currenly fresher in web development and want to go deeper into the web devlopment world.")
  const [authorName,setAuthorName] = useState("Gagneesh Vimal")

  useEffect(()=>{
    if(localStorage.getItem("GBLOGUSER")!==null){
      setLoggedIn(true);
    }
  },[])

  return (
    <BrowserRouter>
      <NavBar loggedIn={loggedIn}/>
      <Routes>
        <Route path='' element={<BlogPage searchResutl={searchResutl} setSearchResult={setSearchResult} currentContent={currentContent} setCurrentContent={setCurrentContent} authorName={authorName} setAuthorName={setAuthorName}/>}/>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/myprofile' element={<UserProfile setAuthorName={setAuthorName} setCurrentContent={setCurrentContent} setLoggedIn={setLoggedIn}/>}/>
        <Route path='/upload' element={<UploadContent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
