import React, { useState } from "react";
import '../componentsCss/Login.css'
import Login from '../components/Login'
import svg from '../tts.svg'
import ModalPage from './ModalPage'

function LoginPage() {
    const [showModal,setShowModal] = useState(false);
    const ModalHandler=()=>{
        setShowModal(!showModal)
      }
    return (
        <div >
            {showModal?(<ModalPage showModal={showModal} setShowModal={setShowModal}></ModalPage>)
            :
            (
            <div className='container'>
                <div className='cover'>
                    <img className='cover-photo' src={svg}alt='' />
                </div>
                <div className='content'><Login ModalHandler={ModalHandler}/></div>
            </div>
            )}
        </div>
    )
}
export default LoginPage;
