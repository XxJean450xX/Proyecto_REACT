import ProductCard from "./ProductCard";
import CardIcon1 from "../assets/flor1.jpg";
import CardIcon2 from "../assets/flor2.jpg";
import CardIcon3 from "../assets/flor3.jpg";

const products = [
  { id: 1, name: "Snake Plant", price: "15", image: CardIcon1, description: "Improves air quality." }, // Corrección aquí
  { id: 2, name: "Spider Plant", price: "12", image: CardIcon2, description: "Filters toxins from the air." },
  { id: 3, name: "Peace Lily", price: "41", image: CardIcon3, description: "Purifies the air." }
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
