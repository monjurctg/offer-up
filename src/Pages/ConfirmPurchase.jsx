import React, { useState } from 'react'
import logo from '../assets/img/logo2.svg'
import img from '../assets/img/Frame 4663.png'
import Modal from '../Components/Modal'
import Header from '../Components/Shared/Header'


function ConfirmPurchase() {
  const [open,setOpen]=useState(false)

  return (
    <>
   
    <div className='purchase-container'>
<nav className="nav">
<img src={logo} alt="" width={200} height={100} />
</nav>
        <div className="container">
            <h3 className='fw-bold mt-5'>Confirm Purchase</h3>
            <div className="row gap-4">
                <div className="col-md-7">
                    <div className="d-flex image">
                        <img src={img} width={100} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, est!
                        </p>
                    </div>
                    <div className="shipping mt-3">
                        <h6 className='fw-bold'>Shipping to</h6>
                        <p>Anthony Piacido</p>
                       <div className="d-flex justify-content-between">
                       <p>1200 E Sandpiper St.apopka,Fl #2712</p>
                       <p className='edit'>Edit</p>
                       </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                        <span className='fw-bold '>Payment method</span><span>(require)</span>
                        </div>
                        <p className='edit'>Add</p>
                    </div>
                </div>
                <div className="col-md-4 ">
               <div className="cal-border">
               <div className="purchase-calculate">
                        <h6>Item price</h6>
                        <p>$10.00</p>
                    </div>
                    <div className="purchase-calculate">
                        <h6>Shipping</h6>
                        <p>$10.00</p>
                    </div>
                    <div className="purchase-calculate">
                        <h6>Sales tax</h6>
                        <p>$10.00</p>
                    </div>
                    <div className="purchase-calculate ">
                        <h6 className='fw-bold fs-5'>You Pay</h6>
                        <p className='fw-bold'>$10.00</p>
                    </div>
               </div>
              
               <button className="place-order-btn mt-4" onClick={()=>setOpen(!open)}>
                Confirm Purchase
               </button>
               <div className="mt-3 ">
                <small>
                    By tapping "Confirm purchase", You agree to the Offerup <a href="#">Terms of Service</a>
                </small>
               </div>
                </div>
            </div>

        </div>


    </div>
    <Modal open={open} setOpen={setOpen}/>

    </>
  )
}

export default ConfirmPurchase