import React from "react";
import Location from "../../assets/img/locationPoint.png";
import logo from "../../assets/img/logo2.svg";
import Categories from "./Categories";
function Header() {
  return (
   <>
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
                <p>o</p>
              </div>
              <div className="location">
                <img src={Location} alt="" />
                <span>Montreal</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block header-right">
            <div className="d-flex gap-4">
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
                <p>User</p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    <Categories/>
   </>
  );
}

export default Header;
