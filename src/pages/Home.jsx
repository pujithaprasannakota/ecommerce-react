import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            WELCOME TO SHOPEASE
          </p>

          <h1>
            Shop smarter.
            <br />
            Live better.
          </h1>

          <p>
            Discover amazing products at great prices.
            Everything you need, all in one place.
          </p>

          <Link to="/products" className="shop-btn">
            Explore Products →
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1000"
            alt="Shopping"
          />
        </div>

      </section>

      <section className="features">

        <div>
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery.</p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Secure Payment</h3>
          <p>Your payments are protected.</p>
        </div>

        <div>
          <span>↩️</span>
          <h3>Easy Returns</h3>
          <p>Simple and hassle-free returns.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;