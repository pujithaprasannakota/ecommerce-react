function Cart({ cart, updateQuantity, removeFromCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-page">
        <div>
          <div className="empty-icon">🛒</div>
          <h1>Your cart is empty</h1>
          <p>Add some products to your cart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="page-header">
        <div>
          <p className="small-title">
            YOUR SHOPPING BAG
          </p>
          <h1>Shopping Cart</h1>
        </div>
      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <p className="category">
                  {item.category}
                </p>

                <h3>{item.name}</h3>

                <strong>
                  ₹{item.price.toLocaleString()}
                </strong>

              </div>

              <div className="quantity">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className="summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>
              ₹{total.toLocaleString()}
            </strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>FREE</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹{total.toLocaleString()}
            </strong>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;