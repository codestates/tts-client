import '../componentsCss/Login.css'
import React from 'react'

function Login() {
    return (
        <div className='LoginBody'>
            <section className='LoginSec'>
                <form className='LoginDiv'>
                    <h1>hello we are TTS</h1>
                    <div className='inputLine'>
                        <input type="text" name='id' id='id' autoComplete='off' required ></input>
                        <label for="id">email</label>
                    </div>
                    <div className='inputLine'>
                        <input type="password" name='pw' id='pw' autoComplete='off' required ></input>
                        <label for="pw">password</label>
                    </div>
                    <div className="LoginBtn">
                            <button type="submit">LOGIN</button>
                    </div>
                    <div className="LoginBtn">
                            <button type="button">SignUp</button>
                    </div>
                    <div className="SignUpBtn">
                            <button type="button">Guest?</button>
                    </div>
                    <div className='OauthDiv'>
                        <div className="AuthGithub">
                            <a href='/#'><i class="fab fa-github"></i></a>
                        </div>
                        <div className='or'>or</div>
                        <div className="AuthGoogle">
                            <a href='/#'><i class="fab fa-google"></i></a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login
