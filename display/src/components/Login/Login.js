import React from 'react'

function Login() {
    return (
        <>
            <div className="container w-50 my-5">
                <form>
                    <h1>login</h1>
                    <div class="mb-3">

                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder='enter mail' aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">

                        <input type="password" class="form-control" placeholder='enter password' id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login