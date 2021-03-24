import React from "react";
import "../componentsCss/ModalPage.css";
import SignUp from '../components/SignUp'


function ModalPage({showModal,setShowModal}) {
  
  return (
    <>
      {showModal ?(
        <div className='ModalBackground'>
          <div className='ModalDiv'>
            <button className='CloseBtn' onClick={()=>setShowModal(!showModal)}>close</button>
            <SignUp></SignUp>
          </div>
        </div>
      ):null}
    </>
  )
}
export default ModalPage;
