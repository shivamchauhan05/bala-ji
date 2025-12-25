import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fas fa-phone me-2"></i>
            <span>Call us: +91 9520680204</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">Free delivery on orders above ₹500</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" className="main-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <div className="logo">
              <span className="logo-part-1">Bala</span>
              <span className="logo-part-2">Ji</span>
            </div>
            <span className="store-subtitle">General Store</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                <i className="fas fa-home me-1"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link"> {/* यहाँ change किया है */}
                <i className="fas fa-store me-1"></i> Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/explore/flour" className="nav-link"> {/* Categories page */}
                <i className="fas fa-th-large me-1"></i> Categories
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                <i className="fas fa-info-circle me-1"></i> About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                <i className="fas fa-phone me-1"></i> Contact
              </Nav.Link>
            </Nav>

            {/* Icons */}
            <div className="header-icons">
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="search-input"
                />
                <FaSearch size={18} className="search-icon" />
              </div>
            {/* <div className="user-dropdown">
                <FaUser size={20} className="header-icon" />
                <div className="dropdown-menu">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/login">Login</Link>
                </div> 
              </div> */}
              <Link to="/cart" className="cart-icon-link">
                <FaShoppingCart size={20} className="header-icon cart-icon" />
                {getCartCount() > 0 && (
                  <Badge pill bg="danger" className="cart-badge">
                    {getCartCount()}
                  </Badge>
                )}
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;