import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-gray-900 py-8 text-center text-white">
        <h1 className="text-3xl font-bold md:text-4xl">
          Product List
        </h1>

        <p className="mt-2 text-gray-300">
          Find your favorite products
        </p>
      </header>

      {/* Products */}
      <main className="mx-auto max-w-7xl px-5 py-10">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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