import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";
import cartIcon from "../assets/card.png";
import "../styles.css";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Paradise Nursery" className="logo" />
      </div>
      <div className="navbar-center">
        <p className="navbar-link">
          <Link to="/">Plants</Link>
        </p>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-container">
          <img src={cartIcon} alt="Shopping Cart" className="cart-icon" />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
