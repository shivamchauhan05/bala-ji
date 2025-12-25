import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart</p>
            <Link to="/" className="btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>
                  <p className="cart-item-weight">{item.weight || '1 kg'}</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  ₹{item.price * item.quantity}
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
            
            <div className="cart-actions">
              <button className="btn-outline" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/" className="btn-outline">
                Continue Shopping
              </Link>
            </div>
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <div className="summary-item">
              <span>Delivery</span>
              <span>₹{getCartTotal() > 500 ? 0 : 50}</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>₹{getCartTotal() > 500 ? getCartTotal() : getCartTotal() + 50}</span>
            </div>
            <Link to="/checkout" className="btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
