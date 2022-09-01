
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Checkout from './Pages/Checkout';
import ConfirmPurchase from './Pages/ConfirmPurchase';
import Home from './Pages/Home/Home';
import ProductDetailsPage from './Pages/ProductDetailsPage';


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/congratulation" element={<Home />}/>
      <Route path="/checkout" element={<Checkout />}/>
<Route path='/' element={<ProductDetailsPage/>}/>
      <Route path="/confirm-purchase" element={<ConfirmPurchase />}/>

    </Routes>
  </HashRouter>
  );
}

export default App;
