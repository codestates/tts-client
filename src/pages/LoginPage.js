import React, { useState } from "react";
import '../componentsCss/Login.css'
import Login from '../components/Login'
import svg from '../tts.svg'
import ModalPage from './ModalPage'

function LoginPage() {
    const [showModal,setShowModal] = useState(false);

    return (
        <div >
            <div className='container'>
                <div className='cover'>
                    <img className='cover-photo' src={svg}alt=''/>
                </div>
                <div className='content'><Login/></div>
            <ModalPage showModal={showModal} setShowModal={setShowModal}></ModalPage>
            </div>
        </div>
    )
}
export default LoginPage;
