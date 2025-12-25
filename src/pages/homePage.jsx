import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Premium Wheat Flour",
      price: 350,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Basmati Rice",
      price: 80,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Assorted Cold Drinks",
      price: 50,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Organic Pulses",
      price: 120,
      image: "https://images.unsplash.com/photo-1598047898035-f364c3bf132e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ]);

  const [categories] = useState([
    {
      id: 1,
      name: "Flour & Grains",
      categoryId: "flour",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Rice Varieties",
      categoryId: "rice",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Cold Drinks",
      categoryId: "cold-drinks",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Cooking Oil",
      categoryId: "oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ]);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: "1 kg"
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Welcome to Bala Ji General Store</h1>
            <p>Your one-stop shop for all daily essentials</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/explore/flour')}>
                Shop Now
              </button>
              <button className="btn-secondary">View Offers</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="Gemini_Generated_Image_brxgkfbrxgkfbrxg.png" alt="Kirana Store" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h3>Free Delivery</h3>
            <p>On orders above ₹500</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Quality Products</h3>
            <p>100% quality assurance</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-rupee-sign"></i>
            </div>
            <h3>Best Prices</h3>
            <p>Guaranteed best rates</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Always available to help</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
                <Link to={`/explore/${category.categoryId}`} className="btn-outline">
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
                <button 
                  className="btn-primary" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="offer-banner">
            <div className="offer-content">
              <h3>Weekend Sale!</h3>
              <p>Get 15% off on all rice varieties</p>
              <p className="offer-details">Use code: RICE15</p>
              <button className="btn-primary">Shop Now</button>
            </div>
            <div className="offer-image">
              <img src="https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Special Offer" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The quality of flour is exceptional. I've been a regular customer for 3 years now."</p>
              </div>
              <div className="testimonial-author">
                <h4>Ramesh Kumar</h4>
                <p>Regular Customer</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Their home delivery service is a lifesaver. Always on time and products are fresh."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sunita Sharma</h4>
                <p>Homemaker</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Best prices in the area for cold drinks and snacks. My kids love their products."</p>
              </div>
              <div className="testimonial-author">
                <h4>Vikram Singh</h4>
                <p>Local Businessman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates on new products and special offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;