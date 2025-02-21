import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Products() {
  return (
    <div>
      <Navbar />
      <h2 className="product-title">Air Purifying Plants</h2>
      <ProductList />
    </div>
  );
}

export default Products;
