import React from "react";
import location from "../assets/img/location.png"

function Location() {
  return (
    <div className="location-container mt-5">
      <h6 style={{ color: "#1B7873",fontSize:"20px" ,fontWeight:"600"}}>
        Here you can find the nearest stores where you can complete the payment
        using Bitcoin ATM:
      </h6>
      <div className="mt-3">
       
        <div className="d-flex gx-5 flex-wrap w-75">
          <div className="location my-3">
          <div className="d-flex mb-4">
            <img src={location} alt="" />
            <p style={{fontWeight:600,marginLeft:"10px"}}>Location 01</p>
        </div>
            <p>City:Henderson</p>
            <p>location:Smoke Center us-79</p>
            <p>Address: 2311 US-79Henderson, TX 75654</p>
            <p  className="mt-3"><span className="fw-bold">Open Hours:</span> 
Mon-Sun: 10:00am - 9.00pm</p>
          </div>
         
          <div className="location my-3 ms-md-5">
          <div className="d-flex mb-4">
            <img src={location} alt="" />
            <p style={{fontWeight:600,marginLeft:"10px"}}>Location 01</p>
        </div>
            <p>City:Henderson</p>
            <p>location:Smoke Center us-79</p>
            <p>Address: 2311 US-79Henderson, TX 75654</p>
            <p  className="mt-3"><span className="fw-bold">Open Hours:</span> 
Mon-Sun: 10:00am - 9.00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
