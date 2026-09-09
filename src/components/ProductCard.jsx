function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(`${product.name} added to cart`);

    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="mb-3 text-xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="mb-2 text-sm text-gray-500">
          Category: {product.category}
        </p>

        <div className="mb-4 flex items-center justify-between">
          
          <p className="text-xl font-bold text-green-600">
            ₹{product.price}
          </p>

          <p className="text-gray-700">
            ⭐ {product.rating}
          </p>

        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 active:scale-95"
        >
          🛒 Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;