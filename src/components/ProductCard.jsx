import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button className={added ? "added" : ""} onClick={handleAddToCart}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
