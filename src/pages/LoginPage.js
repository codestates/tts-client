import React from 'react'
import '../componentsCss/Login.css'
import Login from '../components/Login'
import svg from '../tts2.svg'

function LoginPage() {
    return (
        <div>
            <div className='container'>
                <div className='cover'>
                    <img className='cover-photo' src={svg}alt=''/>
                </div>
                <div className='content'><Login/></div>
            </div>
        </div>
    )
}
export default LoginPage