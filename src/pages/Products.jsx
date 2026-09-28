import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({
  addToCart,
  toggleWishlist,
  wishlist
}) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products-page">

      <div className="page-header">

        <div>
          <p className="small-title">
            OUR COLLECTION
          </p>

          <h1>Products</h1>
        </div>

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

      </div>

      <div className="filters">

        <div className="category-buttons">

          {["All", "Electronics", "Fashion", "Home"].map(
            (item) => (
              <button
                key={item}
                className={
                  category === item ? "selected" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            )
          )}

        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">
            Price: Low to High
          </option>
          <option value="high">
            Price: High to Low
          </option>
        </select>

      </div>

      <div className="product-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some(
                (item) => item.id === product.id
              )}
            />
          ))

        ) : (

          <div className="no-products">
            <h2>No products found</h2>
            <p>Try another search.</p>
          </div>

        )}

      </div>

    </div>
  );
}

export default Products;