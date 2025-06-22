import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop  from "./pages/Shop.jsx";
import  ShopCategory  from "./pages/ShopCategory.jsx";
import  Product  from "./pages/Product.jsx";
import  Cart from "./pages/Cart.jsx";
import  LoginSignup  from "./pages/LoginSignup.jsx";
import Footer from "./components/Footer/Footer.jsx";
import mobile_banner from './components/Assests/banner.jpg'
import tablet_banner from './components/Assests/banner.jpg'
import laptop_banner from './components/Assests/banner.jpg'
import audio_banner from './components/Assests/banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mobiles"
            element={<ShopCategory banner={mobile_banner} category="mobiles" />}
          />
          <Route
            path="/tablets"
            element={<ShopCategory banner={tablet_banner} category="tablets" />}
          />
          <Route
            path="/laptops"
            element={<ShopCategory banner={laptop_banner} category="laptops" />}
          />
          <Route
            path="/audio"
            element={<ShopCategory banner={audio_banner} category="audio" />}
          >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
