import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import spinner from "../assets/img/spin.png";
function Modal({ open, setOpen }) {
  let { id, vehicle, name } = useParams();

  const navigate = useNavigate();
  if (open) {
    setTimeout(() => {
      navigate(`/congratulation/${id}/${vehicle}/${name}`);
    }, 5000);
  }

  return (
    <div className={` ${open ? "overlay" : ""}`}>
      <div
        className={` modal-container ${open ? "modal-open" : "modal-close"} `}
      >
        <img src={spinner} alt="" className="rotate" />
        <h4>Invoice is generating</h4>
        <p>It will take 2 minutes</p>
        <br />
        <br />
        {/* <button onClick={()=>setOpen(!open)}>Close</button> */}
      </div>
    </div>
  );
}

export default Modal;
