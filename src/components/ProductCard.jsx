function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="category">
          Category: {product.category}
        </p>

        <p className="price">
          ₹{product.price}
        </p>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <button
          onClick={() => console.log(product.name)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;