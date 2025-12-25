import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
  const { addToCart } = useCart();
  
  const [products] = useState([
    {
      id: 1,
      name: "Premium Wheat Flour",
      price: 350,
      category: "flour",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "10 kg",
      rating: 4.5
    },
    {
      id: 2,
      name: "Basmati Rice",
      price: 80,
      category: "rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.7
    },
    {
      id: 3,
      name: "Coca-Cola",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.3
    },
    {
      id: 4,
      name: "Toor Dal",
      price: 120,
      category: "pulses",
      image: "https://images.unsplash.com/photo-1598047898035-f364c3bf132e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.6
    },
    {
      id: 5,
      name: "Sunflower Oil",
      price: 180,
      category: "oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 liter",
      rating: 4.4
    },
    {
      id: 6,
      name: "Sugar",
      price: 45,
      category: "sugar",
      image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.2
    },
    {
      id: 7,
      name: "Pepsi",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.1
    },
    {
      id: 8,
      name: "Chana Dal",
      price: 110,
      category: "pulses",
      image: "https://images.unsplash.com/photo-1584738765921-5c2c1576d2e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.5
    },
    {
      id: 9,
      name: "Refined Oil",
      price: 160,
      category: "oil",
      image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 liter",
      rating: 4.3
    },
    {
      id: 10,
      name: "Brown Sugar",
      price: 90,
      category: "sugar",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.6
    },
    {
      id: 11,
      name: "Sprite",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.4
    },
    {
      id: 12,
      name: "Maida Flour",
      price: 320,
      category: "flour",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "10 kg",
      rating: 4.2
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'flour', name: 'Flour & Grains' },
    { id: 'rice', name: 'Rice Varieties' },
    { id: 'cold-drinks', name: 'Cold Drinks' },
    { id: 'pulses', name: 'Pulses & Lentils' },
    { id: 'oil', name: 'Cooking Oil' },
    { id: 'sugar', name: 'Sugar & Sweeteners' }
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return a.id - b.id;
    });

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      weight: product.weight || '1 kg'
    });
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Products</h1>
            <p>Quality groceries for your everyday needs</p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="shop-content">
        <div className="container">
          <div className="shop-header">
            <h2>Browse Our Collection</h2>
            <div className="shop-controls">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search"></i>
              </div>
              <div className="sort-filter">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">By Rating</option>
                </select>
              </div>
            </div>
          </div>

          <div className="shop-body">
            {/* Categories Sidebar */}
            <div className="categories-sidebar">
              <h3>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li
                    key={category.id}
                    className={selectedCategory === category.id ? 'active' : ''}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    <span className="category-count">
                      {category.id === 'all' 
                        ? products.length 
                        : products.filter(p => p.category === category.id).length}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="quick-links">
                <h3>Quick Links</h3>
                <Link to="/explore/flour" className="quick-link">
                  <i className="fas fa-wheat"></i> Flour & Grains
                </Link>
                <Link to="/explore/rice" className="quick-link">
                  <i className="fas fa-bowl-rice"></i> Rice Varieties
                </Link>
                <Link to="/explore/cold-drinks" className="quick-link">
                  <i className="fas fa-wine-bottle"></i> Cold Drinks
                </Link>
                <Link to="/explore/oil" className="quick-link">
                  <i className="fas fa-oil-can"></i> Cooking Oil
                </Link>
                <Link to="/explore/sugar" className="quick-link">
                  <i className="fas fa-candy-cane"></i> Sugar & Sweeteners
                </Link>
                <Link to="/explore/pulses" className="quick-link">
                  <i className="fas fa-seedling"></i> Pulses & Lentils
                </Link>
              </div>

              {/* Special Offers */}
              <div className="special-offers">
                <h3>Special Offers</h3>
                <div className="offer-card">
                  <h4>Weekend Sale!</h4>
                  <p>Get 15% off on all rice varieties</p>
                  <Link to="/explore/rice" className="btn-primary">Shop Now</Link>
                </div>
                <div className="offer-card">
                  <h4>Free Delivery</h4>
                  <p>On orders above ₹500</p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-category">{product.category}</div>
                      <div className="product-overlay">
                        <button 
                          className="quick-view-btn"
                          onClick={() => console.log('View', product.id)}
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button 
                          className="wishlist-btn"
                          onClick={() => console.log('Wishlist', product.id)}
                        >
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-weight">{product.weight}</p>
                      <div className="product-rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                          ></i>
                        ))}
                        <span>({product.rating})</span>
                      </div>
                      <div className="product-price">₹{product.price}</div>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <i className="fas fa-search"></i>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="delivery-info">
        <div className="container">
          <h2>Why Shop With Us?</h2>
          <div className="delivery-content">
            <div className="delivery-item">
              <div className="delivery-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Free Delivery</h3>
              <p>On orders above ₹500 within 5km radius</p>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Quick Delivery</h3>
              <p>Within 2 hours for orders placed before 7 PM</p>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Order via Phone</h3>
              <p>Call us at +91 98765 43210 to place your order</p>
            </div>
            <div className="delivery-item">
              <div className="delivery-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Quality Guarantee</h3>
              <p>100% quality assurance on all products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;