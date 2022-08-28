import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo2.svg";
import Modal from "../Components/Modal";

function ConfirmPurchase() {
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState({});

  const active = async () => {
    const res = await axios.get(
      "https://offerup1.vercel.app/api/active-product"
    );
    // console.log(res);
    if (res.data.length > 0) {
      setActiveProduct(res.data[0]);
    }
  };
  // console.log(activeProduct?.image1);
  useEffect(() => {
    active();
  }, []);

  return (
    <>
      <div className="purchase-container">
        <nav className="nav">
          <img src={logo} alt="" width={200} height={100} />
        </nav>
        <div className="container">
          <h3 className="fw-bold mt-5">Confirm Purchase</h3>
          <div className="row gap-4">
            <div className="col-md-7">
              <div className="d-flex image">
                <img src={activeProduct?.image1} width={100} alt="" />
                <p>{activeProduct?.description}</p>
              </div>
              <div className="shipping mt-3">
                <h6 className="fw-bold">Shipping to</h6>
                <p>Anthony Piacido</p>
                <div className="d-flex justify-content-between">
                  <p>1200 E Sandpiper St.apopka,Fl #2712</p>
                  <p className="edit">Edit</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <span className="fw-bold ">Payment method</span>
                  <span>(require)</span>
                </div>
                <p className="edit">Add</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="cal-border">
                <div className="purchase-calculate">
                  <h6>Item price</h6>
                  <p>${activeProduct?.price}</p>
                </div>
                <div className="purchase-calculate">
                  <h6>Shipping</h6>
                  <p>${activeProduct?.shippingCost}</p>
                </div>
                {/* <div className="purchase-calculate">
                  <h6>Sales tax</h6>
                  <p>$10.00</p>
                </div> */}
                <div className="purchase-calculate ">
                  <h6 className="fw-bold fs-5">You Pay</h6>
                  <p className="fw-bold">
                    ${" "}
                    {parseFloat(activeProduct?.price) +
                      parseFloat(activeProduct?.shippingCost)}
                  </p>
                </div>
              </div>

              <button
                className="place-order-btn mt-4"
                onClick={() => setOpen(!open)}
              >
                Confirm Purchase
              </button>
              <div className="mt-3 ">
                <small>
                  By tapping "Confirm purchase", You agree to the Offerup{" "}
                  <a href="#">Terms of Service</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

export default ConfirmPurchase;
