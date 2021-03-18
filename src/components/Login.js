import '../componentsCss/Login.css'
import React from 'react'

function Login() {
    return (
        <div>
            <section>
                <h1>login Design</h1>
                <div>
                    <input type="text" name='id' id='id' autoComplete='on' required ></input>
                    <label for="id">user name</label>
                </div>
                <div>
                    <input type="password" name='pw' id='pw' autoComplete='off' required ></input>
                    <label for="pw">password</label>
                </div>
                <div className="LoginBtn">
                        <button type="submit">LOGIN</button>
                </div>
                <div className="caption">
                    <a href='/#'>Forgot password</a>
                </div>
            </section>
        </div>
    )
}

export default Login
