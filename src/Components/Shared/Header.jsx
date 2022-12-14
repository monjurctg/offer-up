import React from "react";
import logo from "../../assets/img/logo.jpeg";
function Header() {
  return (
    <div className="header">
      <div className="container-md">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="d-flex header-left">
              <div className="logo">
                {" "}
                <img src={logo} width={150} alt="" />
              </div>
              <div className="input">
                <input type="text" placeholder="Search" />
                <p>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </p>
              </div>
              {/* <div className="location">
                <span>
                  {" "}
                  <img src={Location} alt="" />
                </span>
                <span>Montreal</span>
              </div> */}
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block header-right">
            <div className="d-flex gap-md-4">
              <div className="icon">
                <p>
                  <i class="fa-regular fa-heart"></i>
                </p>
                <p>Send</p>
              </div>
              <div className="icon">
                <p>
                  <i class="fa-regular fa-message"></i>
                </p>
                <p>inbox</p>
              </div>
              <div className="icon">
                <p>
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                </p>
                <p>Selling</p>
              </div>
              <div>
                <p>
                  <i class="fa-regular fa-circle-user"></i>
                </p>
                <small>User</small>
              </div>
            </div>
          </div>
        </div>
        <div className="categories d-none d-md-flex">
          <h5 className="mr-3">Electronics & Media</h5>
          <h5 className="mr-3">Home & Garden</h5>
          <h5 className="mr-3">Clothing,Shoes & Accesories</h5>
          <h5 className="mr-3">Baby & Kids</h5>
          <h5 className="mr-3">Vehicles</h5>
          <h5 className="mr-3">Toys,Games & Hobbies</h5>
          <h5 className="mr-3">Sports & Outdoors</h5>
          <h5 className="mr-3">Pet supplies</h5>
          <h5 className="mr-3">Bussiness Equipment</h5>

          <h5 className="mr-3">Wedding</h5>
          <h5 className="mr-3">More</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
