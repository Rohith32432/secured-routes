import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import React from 'react'
import Login from './Login';

function Test() {
   
   
  return (
    <>
    <GoogleOAuthProvider clientId='1094867572386-7k917l8bot2t0765tobts48u9qkkgrd1.apps.googleusercontent.com'>
    <GoogleLogin
    onSuccess={(res)=>{

       console.log(jwtDecode(res.credential));
    }}
    onError={() => {
        console.log('Login Failed');
      }}
      
    />
    <Login/>
    </GoogleOAuthProvider>

    </>
  )
}

export default Test