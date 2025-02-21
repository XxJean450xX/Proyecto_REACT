import { useNavigate } from "react-router-dom";
import "../styles.css"; // Asegúrate de importar los estilos

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Capa oscura para efecto de opacidad */}
      <div className="content">
        <div className="left">
          <h1>Welcome To Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button onClick={() => navigate("/products")}>Get Started</button>
        </div>
        <div className="right">
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer to you. 
            Our mission is to provide a wide range of high-quality plants that not only 
            enhance the beauty of your surroundings but also contribute to a healthier 
            and more sustainable lifestyle.At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air- purifying plants to aromatic fragrant ones, we have something for every plant enthusiast. Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office. Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep. AF Actualice para obtener más funciones
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
