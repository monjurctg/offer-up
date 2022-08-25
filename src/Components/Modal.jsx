import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import spinner from '../assets/img/spin.png'
function Modal({open,setOpen}) {
  const navigate = useNavigate()
  if(open){
    setTimeout(()=>{
      navigate("/congratulation")
  
    },5000)

  }

 
    
    
  return (
    <div className={` ${open?"overlay":""}`}>
         <div className={` modal-container ${open?"modal-open":"modal-close"} `}>
         <img src={spinner} alt=""  className='rotate'/>
        <h4>Invoice is generating</h4>
        <p>It will take 2 minutes</p>
        <br /><br />
        {/* <button onClick={()=>setOpen(!open)}>Close</button> */}
    </div>

    </div>
   
  )
}

export default Modal