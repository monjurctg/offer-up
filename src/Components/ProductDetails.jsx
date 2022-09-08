import React from "react";
import img from "../assets/img/Frame 4663.png";
import icon from "../assets/img/Icon.png";

function ProductDetails({ activeProduct }) {
  return (
    <div className="product-details-container mt-5">
      <div className="row g-5">
        <div className="col-md-5 image">
          <img
            src={activeProduct?.image1 || img}
            alt=""
            style={{ height: "322px", width: "100%", objectFit: "fill" }}
          />
        </div>
        <div className="col-md-7 product-info">
          <h5 className="trx-order">
            OfferUp Transaction Order ID -{" "}
            {132344345434 + Math.floor(Math.random(11) * 1999)}
          </h5>
          <div className="d-flex">
            <button>Waiting List:2</button>
            <p className="ms-1">
              <img src={icon} alt="" />
            </p>
          </div>
          <div className="w-75">
            <div className="d-flex  mt-3   justify-content-between">
              <h6 className="fw-bold w-50 ">Price:</h6>
              <p className="w-50">${activeProduct?.price}</p>
            </div>
            <div
              className="d-flex  mt-3 justify-content-between"
              style={{ textAlign: "start" }}
            >
              <h6 className="fw-bold">Shipping & Handling:</h6>
              <p className="w-50 " style={{ color: "#1B7873" }}>
                Free
              </p>
            </div>
            <div className="d-flex  mt-3 justify-content-between">
              <h6 className="fw-bold">Title:</h6>
              <p className="w-50">{activeProduct?.title}</p>
            </div>
            <div className="d-flex  mt-3 justify-content-between">
              <h6 className="fw-bold">Payment Method:</h6>
              <p className="w-50">Bitcoin</p>
            </div>
            <div className="d-flex  mt-3 justify-content-between">
              <h6 className="fw-bold">Return:</h6>
              <p className="w-50">
                <span style={{ color: "#1B7873" }}>Free</span> for buyer and
                seller
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
