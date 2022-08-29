import React from "react";

function TermsAndCondition() {
  return (
    <div className="terms-container">
      <h5 className="title">Terms and Conditions:</h5>
      <h5> Buyer and Seller Agreement:</h5>
      <p>
        Both parties agree with the description of the product and the price for
        sale.Offerup Motors verifythe description and theme chanical part of the
        vehicles stored in our warehouse.So we can confirm the description of
        the seller if it is necessary.
      </p>
      <h5>Deposit Payment to OfferUp Motors</h5>
      <p>
        The buyer needs to follow the instructions found in the invoice.The
        payment method will be selected by Offerup Motors depending on the sale
        price.
      </p>
      <h5>Delivery Policy</h5>
      <p>
        After the payment is validated,the shipping process starts to the
        buyer's location.Delivery time is from 3 to 5 days to the United States
        Area.
      </p>
      <h5> Money Guarantee Policy</h5>
      <p>
        {" "}
        The Buyer has 5 days to verify the item and the option to accept or
        reject.Return shipping will be at the Seller'sexpense.
      </p>
      <h5>Payment to the Seller Agreement</h5>
      <p>
        The payment will be released to the seller only after the buyer agrees
        and confirms to OfferupMotors that they want to keep the
        item.OfferupMotors will wait for the confirmation from the buyer 3-5
        days(Delivery Time)and 5days(Inspection Period).
      </p>

      <h5>
        If the invoice is not paid within 48 hours, it will expire and the item
        can be reserved by another potential buyer. For any questions contact
        Offerup Motors Support Department Reply Invoice!
      </h5>
    </div>
  );
}

export default TermsAndCondition;
