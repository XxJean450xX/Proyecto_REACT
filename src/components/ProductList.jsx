import ProductCard from "./ProductCard";
import CardIcon1 from "../assets/flor1.jpg";
import CardIcon2 from "../assets/flor2.jpg";
import CardIcon3 from "../assets/flor3.jpg";
import CardIcon4 from "../assets/flor4.png";
import CardIcon5 from "../assets/flor5.jpeg";
import CardIcon6 from "../assets/flor6.jpg";

const products = [
  { id: 1, name: "Snake Plant", price: 15, image: CardIcon1, description: "Improves air quality." },
  { id: 2, name: "Spider Plant", price: 12, image: CardIcon2, description: "Filters toxins from the air." },
  { id: 3, name: "Peace Lily", price: 41, image: CardIcon3, description: "Purifies the air." },
  { id: 4, name: "Aloe Vera", price: 20, image: CardIcon4, description: "Heals skin and purifies air." },
  { id: 5, name: "Areca Palm", price: 25, image: CardIcon5, description: "Adds humidity and purifies air." },
  { id: 6, name: "Boston Fern", price: 18, image: CardIcon6, description: "Boosts humidity and removes toxins." }
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
