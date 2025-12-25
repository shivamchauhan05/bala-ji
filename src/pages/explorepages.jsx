import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Explore.css';

const Explore = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryId || 'flour');

  // Complete product data with correct categories
  const allProducts = [
    {
      id: 1,
      name: "Premium Wheat Flour",
      price: 350,
      category: "flour",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "10 kg",
      rating: 4.5,
      description: "Finest quality wheat flour, perfect for chapatis and breads."
    },
    {
      id: 2,
      name: "Organic Whole Wheat Flour",
      price: 400,
      category: "flour",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "5 kg",
      rating: 4.7,
      description: "100% organic whole wheat flour, stone ground for better nutrition."
    },
    {
      id: 3,
      name: "Maida Flour",
      price: 320,
      category: "flour",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "10 kg",
      rating: 4.2,
      description: "Refined flour for cakes, pastries and other baked items."
    },
    {
      id: 4,
      name: "Basmati Rice",
      price: 80,
      category: "rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.7,
      description: "Aromatic long grain basmati rice, perfect for biryanis and pulao."
    },
    {
      id: 5,
      name: "Sona Masoori Rice",
      price: 65,
      category: "rice",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.4,
      description: "Popular medium grain rice, ideal for daily meals."
    },
    {
      id: 6,
      name: "Brown Rice",
      price: 120,
      category: "rice",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.6,
      description: "Healthy brown rice with high fiber content."
    },
    {
      id: 7,
      name: "Coca-Cola",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.3,
      description: "Classic cola beverage, perfect refreshment for any time."
    },
    {
      id: 8,
      name: "Pepsi",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.1,
      description: "Refreshing cola drink with a unique taste."
    },
    {
      id: 9,
      name: "Sprite",
      price: 50,
      category: "cold-drinks",
      image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "750 ml",
      rating: 4.4,
      description: "Lemon-lime flavored soft drink, crisp and refreshing."
    },
    {
      id: 10,
      name: "Toor Dal",
      price: 120,
      category: "pulses",
      image: "https://images.unsplash.com/photo-1598047898035-f364c3bf132e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.6,
      description: "High-quality toor dal, essential for Indian cooking."
    },
    {
      id: 11,
      name: "Chana Dal",
      price: 110,
      category: "pulses",
      image: "https://images.unsplash.com/photo-1584738765921-5c2c1576d2e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.5,
      description: "Nutritious chana dal, great for various dishes."
    },
    {
      id: 12,
      name: "Moong Dal",
      price: 130,
      category: "pulses",
      image: "https://images.unsplash.com/photo-1592921876260-0a6b46b7619f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.7,
      description: "Easy to digest moong dal, perfect for khichdi and soups."
    },
    {
      id: 13,
      name: "Sunflower Oil",
      price: 180,
      category: "oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 liter",
      rating: 4.4,
      description: "Healthy sunflower oil, perfect for cooking and frying."
    },
    {
      id: 14,
      name: "Mustard Oil",
      price: 200,
      category: "oil",
      image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 liter",
      rating: 4.2,
      description: "Aromatic mustard oil, adds flavor to your dishes."
    },
    {
      id: 15,
      name: "Refined Oil",
      price: 160,
      category: "oil",
      image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      weight: "1 liter",
      rating: 4.3,
      description: "Multipurpose refined oil for all types of cooking."
    },
    {
      id: 16,
      name: "Sugar",
      price: 45,
      category: "sugar",
      image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.2,
      description: "Fine granulated sugar, perfect for sweetening."
    },
    {
      id: 17,
      name: "Jaggery",
      price: 100,
      category: "sugar",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      weight: "1 kg",
      rating: 4.6,
      description: "Natural jaggery, a healthier alternative to sugar."
    },
    {
      id: 18,
      name: "Brown Sugar",
      price: 90,
      category: "sugar",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      weight: "1 kg",
      rating: 4.4,
      description: "Less processed brown sugar with molasses flavor."
    }
  ];

  const categories = [
    { id: 'flour', name: 'Flour & Grains', icon: 'fas fa-wheat' },
    { id: 'rice', name: 'Rice Varieties', icon: 'fas fa-bowl-rice' },
    { id: 'cold-drinks', name: 'Cold Drinks', icon: 'fas fa-wine-bottle' },
    { id: 'pulses', name: 'Pulses & Lentils', icon: 'fas fa-seedling' },
    { id: 'oil', name: 'Cooking Oil', icon: 'fas fa-oil-can' },
    { id: 'sugar', name: 'Sugar & Sweeteners', icon: 'fas fa-candy-cane' }
  ];

  const categoryNames = {
    'flour': 'Flour & Grains',
    'rice': 'Rice Varieties',
    'cold-drinks': 'Cold Drinks',
    'pulses': 'Pulses & Lentils',
    'oil': 'Cooking Oil',
    'sugar': 'Sugar & Sweeteners'
  };

  useEffect(() => {
    setLoading(true);
    setSelectedCategory(categoryId || 'flour');
    
    // Simulate API loading
    setTimeout(() => {
      let filteredProducts;
      
      if (categoryId && categoryId !== 'all') {
        filteredProducts = allProducts.filter(
          product => product.category === categoryId
        );
      } else {
        filteredProducts = allProducts;
      }
      
      setProducts(filteredProducts);
      setLoading(false);
      
      // Reset price range based on products
      if (filteredProducts.length > 0) {
        const minPrice = Math.min(...filteredProducts.map(p => p.price));
        const maxPrice = Math.max(...filteredProducts.map(p => p.price));
        setPriceRange([minPrice, maxPrice + 100]);
      }
    }, 300);
  }, [categoryId]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return a.id - b.id;
  });

  const filteredProducts = sortedProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="explore-page">
        <div className="loading">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="explore-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / 
          <span> {categoryNames[categoryId] || 'All Products'}</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="explore-header">
        <div className="container">
          <h1>{categoryNames[categoryId] || 'All Products'}</h1>
          <p>Explore our wide range of {categoryNames[categoryId]?.toLowerCase() || 'products'}</p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="explore-content">
        <div className="container">
          <div className="explore-body">
            {/* Filters Sidebar */}
            <div className="filters-sidebar">
              <div className="filter-group">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link 
                        to={`/explore/${category.id}`}
                        className={`category-link ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <i className={category.icon}></i>
                        {category.name}
                        <span className="category-count">
                          ({allProducts.filter(p => p.category === category.id).length})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-group">
                <h3>Price Range</h3>
                <div className="price-range-container">
                  <div className="price-range-values">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-inputs">
                    <div className="price-input-group">
                      <label>Min:</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        min="0"
                        max="1000"
                      />
                    </div>
                    <div className="price-input-group">
                      <label>Max:</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <h3>Sort By</h3>
                <div className="sort-options">
                  <button 
                    className={`sort-option ${sortOption === 'default' ? 'active' : ''}`}
                    onClick={() => setSortOption('default')}
                  >
                    <i className="fas fa-sort"></i> Default
                  </button>
                  <button 
                    className={`sort-option ${sortOption === 'price-low' ? 'active' : ''}`}
                    onClick={() => setSortOption('price-low')}
                  >
                    <i className="fas fa-sort-amount-down"></i> Price: Low to High
                  </button>
                  <button 
                    className={`sort-option ${sortOption === 'price-high' ? 'active' : ''}`}
                    onClick={() => setSortOption('price-high')}
                  >
                    <i className="fas fa-sort-amount-up"></i> Price: High to Low
                  </button>
                  <button 
                    className={`sort-option ${sortOption === 'rating' ? 'active' : ''}`}
                    onClick={() => setSortOption('rating')}
                  >
                    <i className="fas fa-star"></i> Rating
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="explore-products">
              <div className="products-header">
                <div className="products-count">
                  <p>
                    <span className="count">{filteredProducts.length}</span> products found
                    {categoryId && categoryId !== 'all' && ` in ${categoryNames[categoryId]}`}
                  </p>
                </div>
                <div className="mobile-sort">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        <div className="product-overlay">
                          <button 
                            className="quick-view"
                            onClick={() => console.log('Quick view', product.id)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          <button 
                            className="add-wishlist"
                            onClick={() => console.log('Add to wishlist', product.id)}
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                        <div className="product-badge">
                          {product.category}
                        </div>
                      </div>
                      <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-weight">{product.weight}</p>
                        <div className="product-rating">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                            ></i>
                          ))}
                          <span className="rating-value">({product.rating})</span>
                        </div>
                        <div className="product-price-info">
                          <span className="product-price">₹{product.price}</span>
                          <span className="product-original-price">₹{Math.round(product.price * 1.1)}</span>
                          <span className="product-discount">10% off</span>
                        </div>
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => {
                            addToCart({
                              ...product,
                              weight: product.weight || '1 kg'
                            });
                          }}
                        >
                          <i className="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <i className="fas fa-search fa-4x"></i>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to see more results</p>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setPriceRange([0, 1000]);
                      setSortOption('default');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Description */}
      <section className="category-description">
        <div className="container">
          <h2>About {categoryNames[categoryId] || 'Our Products'}</h2>
          <p>
            We offer the finest quality {categoryNames[categoryId]?.toLowerCase() || 'products'} sourced from trusted suppliers 
            and local producers. All our products undergo strict quality checks to ensure you get 
            the best value for your money. Whether you're looking for everyday essentials or 
            premium selections, we have something for every need and budget.
          </p>
          <div className="category-features">
            <div className="feature">
              <i className="fas fa-check-circle"></i>
              <span>100% Quality Guarantee</span>
            </div>
            <div className="feature">
              <i className="fas fa-truck"></i>
              <span>Free Delivery on ₹500+</span>
            </div>
            <div className="feature">
              <i className="fas fa-undo"></i>
              <span>Easy Returns</span>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;