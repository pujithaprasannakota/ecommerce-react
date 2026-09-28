import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Shop<span>Ease</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/wishlist" className="nav-icon">
          ♡ Wishlist
          {wishlistCount > 0 && (
            <span className="count">{wishlistCount}</span>
          )}
        </Link>

        <Link to="/cart" className="nav-icon">
          🛒 Cart
          {cartCount > 0 && (
            <span className="count">{cartCount}</span>
          )}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;