import React, { useState } from 'react';

import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendOrderToWhatsApp = async () => {
    // Store owner's phone number (अपना phone number यहां डालें)
    const storePhoneNumber = '919520680204'; // +91 9999999999 format में
    
    const orderItems = cart.map(item => 
      `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n');
    
    const totalAmount = getCartTotal() > 500 ? getCartTotal() : getCartTotal() + 50;
    
    const message = `🎉 *New Order Received!* 🎉
    
👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}

🛒 *Order Items:*
${orderItems}

💰 *Order Summary:*
Subtotal: ₹${getCartTotal()}
Delivery: ₹${getCartTotal() > 500 ? 0 : 50}
*Total: ₹${totalAmount}*

💳 *Payment Method:* ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}

📦 *Order Time:* ${new Date().toLocaleString()}`;

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${storePhoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send order details via WhatsApp
      await sendOrderToWhatsApp();
      
      // Clear cart after successful order
      clearCart();
      
      // Show success message
      setOrderSuccess(true);
      
      // Save order to localStorage for reference
      const order = {
        id: Date.now(),
        items: cart,
        total: getCartTotal() > 500 ? getCartTotal() : getCartTotal() + 50,
        customer: formData,
        date: new Date().toISOString()
      };
      
      const previousOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...previousOrders, order]));
      
    } catch (error) {
      console.error('Error placing order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="order-success">
            <i className="fas fa-check-circle"></i>
            <h2>Order Placed Successfully!</h2>
            <p>Your order has been received and sent to the store owner via WhatsApp.</p>
            <p>You will receive a confirmation call shortly.</p>
            <a href="/" className="btn-primary">Continue Shopping</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Shipping Details</h3>
            
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>
            
            <div className="form-group">
              <label>Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{6}"
                  maxLength="6"
                />
              </div>
            </div>
            
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <div className="payment-content">
                  <i className="fas fa-money-bill-wave"></i>
                  <div>
                    <h4>Cash on Delivery</h4>
                    <p>Pay when you receive your order</p>
                  </div>
                </div>
              </label>
              
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === 'online'}
                  onChange={handleChange}
                />
                <div className="payment-content">
                  <i className="fas fa-credit-card"></i>
                  <div>
                    <h4>Online Payment</h4>
                    <p>Pay now with UPI, Card, or Net Banking</p>
                  </div>
                </div>
              </label>
            </div>
            
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Placing Order...' : 'Place Order & Send WhatsApp'}
            </button>
          </form>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.quantity} × ₹{item.price}</p>
                  </div>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>₹{getCartTotal() > 500 ? 0 : 50}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{getCartTotal() > 500 ? getCartTotal() : getCartTotal() + 50}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;