import React, { useState } from 'react'

function Modal({open,setOpen}) {
    
    
  return (
    <div className={` ${open?"overlay":""}`}>
         <div className={` modal-container ${open?"modal-open":"modal-close"} `}>
        <h1>modal</h1>
        <br />
        <button onClick={()=>setOpen(!open)}>Close</button>
    </div>

    </div>
   
  )
}

export default Modal