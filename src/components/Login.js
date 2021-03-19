import "../componentsCss/Login.css";
import React,{useState} from "react";

function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const emailHandler =(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler =(e)=>{
        setEmail(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
    }

    return (
        <div className='LoginBody'>
            <section className='LoginSec'>
                <form className='LoginDiv' onSubmit={submitHandler}>
                    <h1>hello we are TTS</h1>
                    <div className='inputLine'>
                        <input type="email" name='id' id='id' autoComplete='off' onChange={emailHandler} required ></input>
                        <label for="id">email</label>
                    </div>
                    <div className='inputLine'>
                        <input type="password" name='pw' id='pw' autoComplete='off' onChange={passwordHandler} required ></input>
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
  );
}

export default Login;
