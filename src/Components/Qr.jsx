import React from 'react'
import {QRCodeCanvas} from 'qrcode.react';
function Qr() {
  return (
    <div className='qr-container'>
      <h5>THE QR CODE:</h5>
    <div className="qr">
    <QRCodeCanvas value="https://reactjs.org/" style={{height:"200px",width:"200px"}} />
    </div>

       <p>or, Our Wallet Address</p>
       <h4>bc1qpmgq4655pme90pa54r7gs3enuqgqpuysqcu50a</h4>

    </div>
  )
}

export default Qr