import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchFilter from "./components/SearchFilter";
import Navbar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  if (sortOption === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-100" id="home">

      <Navbar />

      {/* Header */}
      <header className="bg-gray-900 py-12 text-center text-white">
        <h1 className="text-3xl font-bold md:text-5xl">
          Discover Amazing Products
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Search, filter and find the best products بسهولة.
        </p>
      </header>

      <main
        id="products"
        className="mx-auto max-w-7xl px-5 py-10"
      >
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <p className="mb-6 text-gray-600">
          Showing {sortedProducts.length} products
        </p>

        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-lg text-gray-500">
            No products found.
          </p>
        )}
      </main>

    </div>
  );
}

export default App;