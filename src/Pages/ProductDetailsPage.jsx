import React from "react";
import cars from "../assets/img/cars.jpg";
import kia from "../assets/img/kia.jpg";
import Leftside from "../Components/Leftside";

import Header from "../Components/Shared/Header";

function ProductDetailsPage() {
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
          <div className="col-8">
            <div className="right-side">
              <div className="big-image">
                <img src={cars} alt="" />
              </div>
              <div className="small-images">
                <img src={cars} className="active" alt="" />
                <img src={kia} alt="" />
                <img src={kia} alt="" />
                <img src={kia} alt="" />
              </div>
              <div className="description-option">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                  <i class="fa-regular fa-square-share-nodes"></i>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <Leftside />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
