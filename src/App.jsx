import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </CartProvider>
  );
}

export default App;
