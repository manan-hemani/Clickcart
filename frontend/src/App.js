import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop  from "./pages/Shop.jsx";
import  ShopCategory  from "./pages/ShopCategory.jsx";
import  Product  from "./pages/Product.jsx";
import  Cart from "./pages/Cart.jsx";
import  LoginSignup  from "./pages/LoginSignup.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mobiles"
            element={<ShopCategory category="mobiles" />}
          />
          <Route
            path="/tablets"
            element={<ShopCategory category="tablets" />}
          />
          <Route
            path="/laptops"
            element={<ShopCategory category="laptops" />}
          />
          <Route path="/audio" element={<ShopCategory category="audio" />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={ <Cart/>} />
          <Route path="/login" element={ <LoginSignup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
