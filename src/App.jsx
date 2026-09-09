import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

      <main className="mx-auto max-w-7xl px-5 py-10">

        {/* Search and Filter */}
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Product Count */}
        <p className="mb-6 text-gray-600">
          Showing {filteredProducts.length} products
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <p className="py-10 text-center text-lg text-gray-500">
            No products found.
          </p>
        )}

      </main>
    </div>
  );
}

export default App;