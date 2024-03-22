import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React from 'react';
import axios from 'axios';

function Test() {
  const senddata = async (res) => {
    const userdata = jwtDecode(res.credential);
    try {
      const response = await axios.post('http://localhost:32432/test/newusers', userdata);
      console.log(response.data);
    } catch (error) {
      console.error('Error while sending data:', error);
    }
  };
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_ClientId}>
        <GoogleLogin
          onSuccess={senddata}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Test;
