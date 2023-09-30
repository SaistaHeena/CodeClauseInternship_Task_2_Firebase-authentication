import React, { useState } from 'react';
import './App.css';
import './FirebaseConfig';



import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import github from "./components/img/githubbg.png";
import google from "./components/img/googlebg.png";
import phone from "./components/img/phonebg.png";
import fb from "./components/img/facebookbg.png";
import signin from "./components/img/sign-in-bg.png";


function App() {
  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const FBProvider = new FacebookAuthProvider();



  const auth = new getAuth();






  const GoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((response) => {
        console.log(response.user);
      })
  }
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((response) => {
        console.log(response.user);
      })
  }
  const FBSignIn = () => {
    signInWithPopup(auth, FBProvider)
      .then((response) => {
        console.log(response.user);
      })
  }
  return (

    <div>
      <div class="container">
        <div class="logo">
          <img src={signin} alt="" width="100" />
        </div>
        <div className="logo-name">Sign In Page</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>



      <div className='container1'>
        <button className='b1' ><img src={phone} alt='' className='img-phone'></img>Sign in with Phone</button>
        <button className='b2 mt-5 pt-6 rounded-full h-[5rem] pl-5' onClick={GoogleSignIn}><img src={google} alt='' className='img-google bg-white-500 mt-2 pt-2 '></img>Sign in with Google</button>
        <button className='b3' onClick={githubSignIn}><img src={github} className='img-github' alt='' ></img>Sign in with GitHub</button>
        <button className='b4' onClick={FBSignIn} ><img src={fb} alt='' className='img-facebook'></img>Sign in with Facebook</button>
      </div>

    </div>
  );
}

export default App;
