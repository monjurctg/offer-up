import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout";
import ConfirmPurchase from "./Pages/ConfirmPurchase";
import Home from "./Pages/Home/Home";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ProductDetailsPage/>}/> */}
        <Route path="/:id/:vehicle/:name" element={<ProductDetailsPage />} />

        <Route path="/congratulation/:id/:vehicle/:name" element={<Home />} />
        <Route path="checkout/:id/:vehicle/:name" element={<Checkout />} />
        <Route
          path="/confirm-purchase/:id/:vehicle/:name"
          element={<ConfirmPurchase />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
