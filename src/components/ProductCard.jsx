function ProductCard({
  product,
  addToCart,
  toggleWishlist,
  isWishlisted
}) {
  return (
    <div className="product-card">

      <div className="image-container">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className={`wishlist-btn ${
            isWishlisted ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

      </div>

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐ {product.rating}
        </div>

        <div className="product-bottom">

          <strong>
            ₹{product.price.toLocaleString()}
          </strong>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;