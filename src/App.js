
import './App.css';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ConfirmPurchase from './Pages/ConfirmPurchase';
import ProductDetailsPage from './Pages/ProductDetailsPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/congratulation" element={<Home />}/>
      <Route path="/checkout" element={<Checkout />}/>
<Route path='/' element={<ProductDetailsPage/>}/>
      <Route path="/confirm-purchase" element={<ConfirmPurchase />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
