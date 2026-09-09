function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
      </select>

      {/* Sorting */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="default">Sort Products</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating: High to Low</option>
      </select>

    </div>
  );
}

export default SearchFilter;