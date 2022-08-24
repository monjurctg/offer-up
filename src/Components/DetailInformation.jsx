import React from 'react'

function DetailInformation() {
  return (
    <div className='information-container mt-5'>
        <p className='heading'>Detail information</p>
        <div className="info-card-container ">
            <div className=" info-card">
              <div className="ms-4">
              <h5 className='fw-bold' style={{fontSize:"24px"}}>Seller Information</h5>
              
             <div className="mt-5">
             <span className='fw-bold' style={{fontSize:"20px"}}>Name:</span>
               <span className="ms-5" style={{color:"black",fontSize:"20px"}}>Sarah  Wylde</span>
             </div>
             <div className="mt-4 d-flex" style={{fontSize:"20px"}}>
             <span className='fw-bold'>Address:</span>
               <span className="ms-4">1933 Skyline Dr Minot ND 58703</span>
             </div>
              </div>
            
            </div>
            <div className=" info-card">
              <div className="ms-4">
              <h5 className='fw-bold'style={{fontSize:"24px"}}>Buyer Information</h5>
              
             <div className="mt-5">
             <span className='fw-bold' style={{fontSize:"20px"}}>Name:</span>
               <span className="ms-5" style={{color:"black",fontSize:"20px"}}>Sarah  Wylde</span>
             </div>
             <div className="mt-4 d-flex" style={{fontSize:"20px"}}>
             <span className='fw-bold'>Address:</span>
               <span className="ms-4">1933 Skyline Dr Minot ND 58703</span>
             </div>
              </div>
            
            </div>
            <div className=" info-card">
              <div className="ms-4">
              <h5 className='fw-bold' style={{fontSize:"24px"}}>Delivery Info</h5>
              
             <div className="mt-5">
             <span className='fw-bold' style={{fontSize:"20px"}}>Company:</span>
               <span className="ms-5" style={{color:"black",fontSize:"20px"}}>Wallapop Motors</span>
             </div>
             <div className="mt-4 d-flex" style={{fontSize:"20px"}}>
             <span className='fw-bold'>Tracking Number:</span>
               <span className="ms-4">pending</span>
             </div>
             <div className="mt-4 d-flex" style={{fontSize:"20px"}}>
             <span className='fw-bold'>Shipping Status:</span>
               <span className="ms-4">pending</span>
             </div>
              </div>
            
            </div>
        </div>


    </div>
  )
}

export default DetailInformation