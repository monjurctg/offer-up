import React from "react";
import { Link, useParams } from "react-router-dom";

function Leftside({ product }) {
  console.log(product);
  let { id, vehicle, name } = useParams();
  return (
    <div className="left-side">
      <div className="left-description ">
        <h4>{product?.title}</h4>
        <h4>{product?.sortTitle}</h4>
        <h4>${product?.price}</h4>
        <div className="ship">
          <i class="fa-solid fa-ship"></i>
          <p>{product?.shippingCost}</p>
        </div>

        <div className="posting-time ">
          <p>Posted 2 days ago in {product?.place}</p>
          <p>Condition: Used Like New</p>
          <p>Category: Car & Trucks</p>
        </div>
        <Link to={`/checkout/${id}/${vehicle}/${name}`}>
          <button className="place-order-btn text-center my-3">Buy Now</button>
        </Link>

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
        <img src={product?.image3} alt="" />

        <div className="profile-description">
          <h4>A-Tr</h4>
          <p>Member since MAY 2022</p>
        </div>
      </div>
      <div className="two-day p-3 d-flex gap-3">
        <div>
          <img
            src="https://media.istockphoto.com/vectors/protected-shield-protection-security-icon-vector-id1225850589?k=20&m=1225850589&s=170667a&w=0&h=juDdXS6TEBSO9XDt9lBgQ20l6NeQnRMmmLJAvIGJhuw="
            width={100}
            height={50}
            alt=""
          />
        </div>
        <div>
          <h6 className="fw-bold mb-2">2-Day Purchase Protection</h6>
          <p>
            Item shipped through Offer Up come with a e-day purcases protection
            . <span className="fw-bold">Learn More</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
