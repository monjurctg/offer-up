import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useState } from "react";
function Qr() {
  const [qr, setqr] = useState(null);
  useEffect(() => {
    axios.get("https://server.offerup-motors.com/api/active-qr").then((res) => {
      // console.log("res", res);
      setqr(res.data.data);
    });
  }, []);
  console.log("qr :>> ", qr);

  return (
    <div className="qr-container">
      <h5>THE QR CODE:</h5>
      <div className="qr">
        {qr?.length > 0 ? (
          <img
            src={qr[0]?.qrImage}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
        ) : (
          <QRCodeCanvas
            value="https://reactjs.org/"
            style={{ height: "200px", width: "200px" }}
          />
        )}
      </div>

      {/* <p>or, Our Wallet Address</p> */}
      {/* <h4>bc1qpmgq4655pme90pa54r7gs3enuqgqpuysqcu50a</h4> */}
    </div>
  );
}

export default Qr;
