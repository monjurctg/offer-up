import React, { useEffect, useState } from "react";
// import "./Checkout.css";
import logo from "../assets/img/logo2.svg";
import bear from "../assets/img/Frame 4663.png";
import locationPoint from "../assets/img/locationPoint.png";
import cart from "../assets/img/cart.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { SiBitcoinsv } from "react-icons/si";
// import { IoLocation } from "react-icons/io5";
// import { BsCartPlusFill } from "react-icons/bs";

const Checkout = () => {
  const navigate = useNavigate();
  const [loding, setLoading] = useState(false);


  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    zip: "",
  });
 
  const handeChange = (e) => {
    console.log(order)
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submit = async () => {
    setLoading(true);
    const url = "http://localhost:5000/api/add-order";
    let res = await axios.post(url, order);
    console.log(res)

    if (res.data.message) {
      setLoading(false);
    

      navigate("/confirm-purchase");
    } else {
      setLoading(false);

      console.log(res.data.err);
    }
  };

  return (
    <>
      <div className="margin-side home-container checkout-container">
        <img src={logo} alt="" width={150} />

        <div className="row  mt-5 align-items-center justify-content-around">
          {/* left side part */}
          <div className="col-12 col-md-5">
            <h4 className="fw-bold mb-3"> Checkout</h4>
            <form class="row">
              <div class="col-12">
                <p className="mb-1 mt-2">
                  {/* <IoLocation className="text-success" /> */}
                  <img src={locationPoint} alt="" />
                  <span className="ms-2 ">Shipping To</span>
                </p>
                <hr className="mt-0" />
              </div>
              <div class="col-12">
                <label htmlFor="">Name</label>
                <input type="text" name="name" placeholder="Your Name" onChange={handeChange} />
              </div>
              <div class="col-12 mt-3">
                <label htmlFor="">Email</label>
                <input type="text" name="email" placeholder="your Email" onChange={handeChange} />
              </div>
              <div class="col-12 mt-3">
                <label htmlFor="">Phone</label>
                <input type="number" name="phone" placeholder="your Phone" onChange={handeChange} />
              </div>
              <div class="col-12 mt-3">
                <label htmlFor="">Address</label>
                <input type="text" name="address" placeholder="Your Address" onChange={handeChange}/>
              </div>
              <div class="col-md-4 mt-3">
                <label htmlFor="">City</label>
                <input type="text" placeholder="city" name="city" onChange={handeChange} />
              </div>
              <div class="col-md-4 mt-3">
                <label htmlFor="">State</label>
                <input type="text" placeholder="state" name="staet" onChange={handeChange} />
              </div>
              <div class="col-md-4 mt-3">
                <label htmlFor="">Zip</label>
                <input type="text" placeholder="zip" name="zip" onChange={handeChange} />
              </div>
              <div class="col-12">
                <p className="mb-1 mt-4">
                  {/* <IoLocation className="text-success" />{" "} */}
                  <img src={locationPoint} alt="" />
                  <span className="ms-2">Payment Method</span>
                </p>
                <hr className="mt-0" />
              </div>
              <div>
                {/* <SiBitcoinsv className="text-warning fs-5" /> */}
                <img
                  src="https://media.istockphoto.com/vectors/blockchain-bitcoin-icon-symbol-vector-vector-id882085928?k=20&m=882085928&s=612x612&w=0&h=KjVJuPadqOEQhviae5GqYPsIqMhXZDd0PcQ6390xQkU="
                  alt=""
                  height={30}
                  width={30}
                />
                <span className="ms-3">Bitcoin</span>
              </div>
            </form>
         
          </div>

          {/* right side part */}
          <div className="col-12 col-md-5">
            <div className="row d-flex align-items-center">
              <div className="col-md-5">
                <img src={bear} height="230" alt="" />
              </div>
              <div className="col-md-7  text-start ">
                {" "}
                <p>
                  Double Wall Stainless Steel Bottle - vacuum Insulated -
                  20oz/590ml - High Quality - New
                </p>
                <p>Total Unit: 1</p>
                <p> Unit Price: 67.00</p>
              </div>
            </div>

            <div className="mt-5">
              <p>
                {" "}
                {/* <BsCartPlusFill className="text-success" />{" "} */}
                <img src={cart} alt="" />
                <span className="ms-2 fw-bold">Fees</span>
              </p>
              <hr className="fw-bold" />
              <div className="calculate">
                <div className="d-flex mt-4  justify-content-between">
                  <h6>Subtotal</h6>{" "}
                  <h6>
                    $ <span>67.00</span>
                  </h6>
                </div>
                <div className="d-flex mt-4 justify-content-between">
                  <h6>vat</h6>{" "}
                  <h6>
                    $ <span>7.00</span>
                  </h6>
                </div>
                <div className="d-flex mt-4 mb-3 justify-content-between mb-0">
                  <h6>Shipping fee</h6>{" "}
                  <h6>
                    $ <span>6.00</span>
                  </h6>
                </div>
                <hr className="mt-0" />
                <div className="d-flex my-4 justify-content-between">
                  <h6>total</h6>{" "}
                  <h6>
                    $ <span>67.00</span>
                  </h6>
                </div>
              </div>
            </div>
            <h5 className="my-4 fw-bold">Review & Place Order</h5>
            <div className="two-day  p-3 d-flex gap-3">
              <div>
                <img
                  src="https://media.istockphoto.com/vectors/protected-shield-protection-security-icon-vector-id1225850589?k=20&m=1225850589&s=170667a&w=0&h=juDdXS6TEBSO9XDt9lBgQ20l6NeQnRMmmLJAvIGJhuw="
                  width={100}
                  height={50}
                  alt=""
                />
              </div>
              <div>
                <h5 className="fw-bold mb-2">2-Day Purchase Protection</h5>
                <p>
                  Item shipped through Offer Up come with a e-day purcases
                  protection . <span className="fw-bold">Learn More</span>
                </p>
              </div>
            </div>
            <p style={{ fontSize: "16px" }}>
              Please review the order details and payment details before
              proceeding to confirm your order
            </p>
            <input type="checkbox" name="" id="" />
            <span className="ms-2" style={{ fontSize: "14px" }}>
              I agree to the{" "}
              <span style={{ color: "blue" }}>Term & Condition</span> ,{" "}
              <span style={{ color: "blue" }}>Privacy Policy</span> &{" "}
              <span style={{ color: "blue" }}> Return Policy</span>
            </span>
            <div class=" mt-3 ">
              <button class=" place-order-btn" type="button" onClick={submit}>
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// import React from 'react';
// import "./Checkout.css";
// import image from "./../../images/image 6.png"
// import bear from "./../../images/images.jpg"
// import { SiBitcoinsv } from "react-icons/si";
// import { IoLocation } from "react-icons/io5";
// import { BsCartPlusFill } from "react-icons/bs";

// const Checkout = () => {
//     return (
//       <>
//         <div className="container">
//           <img src={image} className="ms-0 mb-2" alt="" />
//           <div className="row d-flex align-items-center justify-content-around">
//             {/* left side part */}
//             <div className="col-12 col-md-5">
//               <h4 className="fw-bold mb-3"> Checkout</h4>
//               <form class="row">
//                 <div class="col-12">
//                   <p className="mb-1 mt-2">
//                     <IoLocation className="text-success" />
//                     <span className="ms-1 ">Shipping To</span>
//                   </p>
//                   <hr className="mt-0" />
//                 </div>
//                 <div class="col-12">
//                   <label for="inputAddress" class="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="inputAddress"
//                     placeholder="Alu vorta painna dail"
//                   />
//                 </div>
//                 <div class="col-12">
//                   <label for="inputAddress" class="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="inputAddress"
//                     placeholder=""
//                   />
//                 </div>
//                 <div class="col-12">
//                   <label for="inputAddress2" class="form-label">
//                     Phone
//                   </label>
//                   <input
//                     type="number"
//                     class="form-control"
//                     id="inputAddress2"
//                     placeholder=""
//                   />
//                 </div>
//                 <div class="col-12">
//                   <label for="inputAddress2" class="form-label">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     id="inputAddress2"
//                     placeholder=""
//                   />
//                 </div>
//                 <div class="col-md-4">
//                   <label for="inputCity" class="form-label">
//                     City
//                   </label>
//                   <input type="text" class="form-control" id="inputCity" />
//                 </div>
//                 <div class="col-md-4">
//                   <label for="inputState" class="form-label">
//                     State
//                   </label>
//                   <input type="text" class="form-control" id="inputCity" />
//                 </div>
//                 <div class="col-md-4">
//                   <label for="inputZip" class="form-label">
//                     Zip
//                   </label>
//                   <input type="text" class="form-control" id="inputZip" />
//                 </div>
//                 <div class="col-12">
//                   <p className="mb-1 mt-4">
//                     <IoLocation className="text-success" />{" "}
//                     <span className="ms-1">Payment Method</span>
//                   </p>
//                   <hr className="mt-0" />
//                 </div>
//                 <div>
//                   <SiBitcoinsv className="text-warning fs-5" />
//                   <span className="ms-3">Bitcoin</span>
//                 </div>
//               </form>
//             </div>

//             {/* right side part */}
//             <div className="col-12 col-md-5">
//               <div className="row d-flex align-items-center">
//                 <div className="col-md-5">
//                   <img src={bear} height="230" alt="" />
//                 </div>
//                 <div className="col-md-7 text-start ">
//                   {" "}
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Quaerat, eius.
//                   </p>
//                   <p>Quality: new</p>
//                   <p>total unit: 1</p>
//                   unit price: 67.00
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <p>
//                   {" "}
//                   <BsCartPlusFill className="text-success" />{" "}
//                   <span className="ms-2 fw-bold">Fees</span>
//                 </p>
//                 <hr className="fw-bold" />
//                 <div>
//                   <div className="d-flex justify-content-between">
//                     <h6>Subtotal</h6>{" "}
//                     <h6>
//                       $ <span>67.00</span>
//                     </h6>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h6>vat</h6>{" "}
//                     <h6>
//                       $ <span>7.00</span>
//                     </h6>
//                   </div>
//                   <div className="d-flex justify-content-between mb-0">
//                     <h6>Shipping fee</h6>{" "}
//                     <h6>
//                       $ <span>6.00</span>
//                     </h6>
//                   </div>
//                   <hr className="mt-0" />
//                   <div className="d-flex justify-content-between">
//                     <h6>total</h6>{" "}
//                     <h6>
//                       $ <span>67.00</span>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//               <h5>Review & Place Order</h5>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
//                 natus eveniet repudiandae consequuntur ad tempore modi nobis,
//                 iure consectetur laborum.
//               </p>
//               <p>
//                 I agree to the{" "}
//                 <span className='text-primary'>term & condition, privacy policy & return policy</span>.thanks
//               </p>
//               <div class="d-grid gap-2">
//                 <button class="btn btn-primary" type="button">
//                   Button
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// };

export default Checkout;
