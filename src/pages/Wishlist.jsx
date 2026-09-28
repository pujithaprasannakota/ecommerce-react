import ProductCard from "../components/ProductCard";

function Wishlist({
  wishlist,
  addToCart,
  toggleWishlist
}) {

  return (
    <div className="products-page">

      <div className="page-header">

        <div>
          <p className="small-title">
            YOUR FAVORITES
          </p>

          <h1>Wishlist</h1>
        </div>

      </div>

      {wishlist.length === 0 ? (

        <div className="empty-page">
          <div>
            <div className="empty-icon">♡</div>
            <h1>Your wishlist is empty</h1>
            <p>
              Save products you love here.
            </p>
          </div>
        </div>

      ) : (

        <div className="product-grid">

          {wishlist.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={true}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;