import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/img/kia.jpg";

function Leftside() {
  return (
    <div className="left-side">
      <div className="left-description ">
        <h4>Double Wall Stainless Steel</h4>
        <h4>Bottle Vacuum Insulated -</h4>
        <h4>20oz/500ml-High Quality-New</h4>
        <h4>$20</h4>
        <div className="ship">
          <i class="fa-solid fa-ship"></i>
          <p>Ships for $7.89</p>
        </div>

        <div className="posting-time ">
          <p>Posted 2 days ago in Los Angeles, CA</p>
          <p>Condition:New</p>
          <p>Sports & Outside-Exercise-Fitness accessories</p>
        </div>
        <Link to={"/checkout"}>
          <button className="place-order-btn text-center my-3">Buy Now</button>
        </Link>
        <button className="ask-btn text-center">Ask</button>

        <div className="d-flex my-3 justify-content-around">
          <div className="l-btn ">
            <i class="fa-regular fa-heart"></i>
            <p>Save</p>
          </div>

          <div className="l-btn">
            <i class="fa-solid fa-share-nodes"></i>
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="left-profile">
        <img src={profile} alt="" />

        <div className="profile-description">
          <h4>A-Tr</h4>
          <p>Member since MAY 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
