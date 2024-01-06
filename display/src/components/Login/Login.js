import React from 'react'
import { useTest } from '../Maincontext'

function Login() {

   
    const handlesubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        localStorage.setItem('user',form.get('email'))

    }

    return (
        <>
            <div className="container w-50 my-5">
                <form onSubmit={handlesubmit}>
                    <h1>login</h1>
                    <div class="mb-3">
   <input type="email" class="form-control" id="exampleInputEmail1" placeholder='enter mail' name='email' aria-describedby="emailHelp" />
                  </div>
                    <div class="mb-3">
                    <input type="password" class="form-control" placeholder='enter password' id="exampleInputPassword1" name='pwd' />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login