import axios from "axios";
import React, { useEffect, useState } from "react";
import Leftside from "../Components/Leftside";

import Header from "../Components/Shared/Header";

function ProductDetailsPage() {
  const [activeProduct, setActiveProduct] = useState({});
  const [imageNow, setimageNow] = useState();
  const active = async () => {
    const res = await axios.get("http://localhost:5000/api/active-product");
    console.log(res);
    if (res.data.length > 0) {
      setActiveProduct(res.data[0]);
      setimageNow(res.data[0]?.image1);
    }
  };
  // console.log(activeProduct?.image1);
  useEffect(() => {
    active();
  }, []);
  return (
    <>
      <Header />

      <div className="container mt-2">
        <div className="links">
          <div className="d-flex ">
            <p>Home</p>
            <span>&gt;</span>
          </div>
          <div className="d-flex ">
            <p>Sports & Outsides</p>
            <span>&gt;</span>
          </div>
          <div className="d-flex ">
            <p>Exercise</p>
            <span>&gt;</span>
          </div>
          <div className="d-flex ">
            <p>Filter & Accesories</p>
            <span>&gt;</span>
          </div>
          <div className="d-flex ">
            <p>Double wall Stainless Steel</p>
            <span>&gt;</span>
          </div>
        </div>
        <div className="description row">
          <div className="col-md-8 col-12">
            <div className="right-side">
              <div className="big-image">
                <img src={imageNow} alt="" />
              </div>
              <div className="small-images">
                <img
                  src={activeProduct?.image1}
                  onClick={() => setimageNow(activeProduct?.image1)}
                  className={activeProduct?.image1 === imageNow ? "active" : ""}
                  alt=""
                />
                <img
                  src={activeProduct?.image2}
                  className={activeProduct?.image2 === imageNow ? "active" : ""}
                  onClick={() => setimageNow(activeProduct?.image2)}
                  alt=""
                />
                <img
                  src={activeProduct?.image3}
                  className={activeProduct?.image3 === imageNow ? "active" : ""}
                  onClick={() => setimageNow(activeProduct?.image3)}
                  alt=""
                />
                <img
                  className={activeProduct?.image4 === imageNow ? "active" : ""}
                  src={activeProduct?.image4}
                  onClick={() => setimageNow(activeProduct?.image4)}
                  alt=""
                />
              </div>
              <div className="description-option">
                <h4>Description</h4>
                <p>{activeProduct?.description}</p>
              </div>

              <div className="buttons d-flex my-3">
                <div className="love-btn ">
                  <i class="fa-regular fa-heart"></i>
                  <p>Save</p>
                </div>
                <div className="love-btn">
                  <i class="fa-regular fa-flag"></i>
                  <p>Report</p>
                </div>
                <div className="love-btn">
                  <i class="fa-solid fa-share-nodes"></i>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Leftside product={activeProduct} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
