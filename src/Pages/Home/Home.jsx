import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo2.svg";
import DetailInformation from "../../Components/DetailInformation";
import HowToPayment from "../../Components/HowToPayment";
import Location from "../../Components/Location";
import ProductDetails from "../../Components/ProductDetails";
import Qr from "../../Components/Qr";
import QuickSummary from "../../Components/QuickSummary";
import TermsAndCondition from "../../Components/TermsAndCondition";

function Home() {
  const [activeProduct, setActiveProduct] = useState({});

  const active = async () => {
    const res = await axios.get(
      "https://offerup1.vercel.app/api/active-product"
    );
    // console.log(res);
    if (res.data.length > 0) {
      setActiveProduct(res.data[0]);
    }
  };
  // console.log(activeProduct?.image1);
  useEffect(() => {
    active();
  }, []);
  return (
    <div className="margin-side home-container">
      <img src={logo} alt="" width={150} />
      <h6 className="congratulation">
        <span> Congratulations!</span> The item {activeProduct?.title} is
        reserved under your name for the next 48 Hours.
      </h6>
      <p style={{ marginTop: "20px" }}>
        We appreciate your business and thank you for choosing OfferUp! Please
        read carefully the instructions below in order to complete
        thistransaction.This invoice is available only for 48 hours!
      </p>

      <ProductDetails activeProduct={activeProduct} />
      <DetailInformation />
      <HowToPayment />
      <Location />
      <Qr />
      <QuickSummary />
      <TermsAndCondition />
    </div>
  );
}

export default Home;
