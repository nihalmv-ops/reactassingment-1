import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Product List</h1>

        <p>Find your favorite products</p>
      </header>

      <main className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;