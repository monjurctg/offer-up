import React from "react";

function QuickSummary() {
  return (
    <div className="Quick-summary-container mt-5">
      <h5>Note: The Quick Summary Of How To Use A Bitcoin ATM:</h5>
      <p>
        ** Call our Customer Service number when you arrive at the ATM location
        in order to receive all theinstructions on how to complete the payment.
      </p>
      <br />
      <br />
      <ol className="">
        <li>Touch the screen to start.</li>
        <li> Click on the screen. </li>
        <li>
          {" "}
          You will see 2 options: "BUY" or "SELL".Please select "BUY" in order
          to go to the nextstep.{" "}
        </li>
        <li>
          {" "}
          In order to verify ouridentity you will need to input your phonenumber
          OR/AND scan the front and back part ofyour personal ID at the ATM's
          scanner. You willreceive a verification code via text message tothe
          phone number you submitted. Please input thecode on the ATM.
        </li>
        <li> Scanthe QR Code of your OfferUp Invoice.</li>
        <li> Deposit the cash amount of $2,000.00.</li>
        <li>
          After thetotal amount is into the ATM, select "confirm"in order to
          receive the receipt for thetransaction.{" "}
        </li>
        <li>
          {" "}
          Reply with a clear picture of the receipt forvalidation, once the
          payment is submitted.
        </li>
        <li>
          {" "}
          For any questions contact OfferupMotors Support Department Reply
          Invoice!
        </li>
      </ol>
    </div>
  );
}

export default QuickSummary;
