import React, { useState } from 'react';
import { useTest } from '../Maincontext';
import axios from 'axios';

function Login() {
  const [data, setData] = useState({ email: '', pwd: '' });
  const auth = useTest();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const pwd = form.get('pwd');

    setData({ email, pwd });

    
    try {
        const response = await axios.post('http://localhost:32432/validate', data);
        let res=response.data
        if(res){
          localStorage.setItem('user', res.email);
          localStorage.setItem('role',res.role)
          auth.islogged(true);
        }

        console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <>
      <div className="container w-50 my-5">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleIn putEmail1"
              placeholder="Enter email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="exampleInputPassword1"
              name="pwd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
