import React,{useState} from "react";
import "../componentsCss/ModalPage.css";


function ModalPage({showModal,setShowModal}) {

  
  return (
    <div className='ModalBackground'>
      <div className='ModalDiv'>
        <button className='CloseBtn'></button>
      </div>
    </div>
  )
}

export default ModalPage;
