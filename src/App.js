
import './App.css';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/checkout" element={<Checkout />}/>

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
