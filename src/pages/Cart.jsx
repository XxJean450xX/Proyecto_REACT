import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles.css";
import Navbar from "../components/Navbar";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <Navbar />
      <h1>Plants</h1>
      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <Link to="/products">
          <button className="continue-shopping">Continue Shopping</button>
        </Link>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
