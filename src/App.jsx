import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify'; 
import Header from './components/Header';
import Home from './pages/homePage';
import Explore from './pages/explorepages';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Shop from './pages/Shop';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
          <ToastContainer 
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore/:categoryId" element={<Explore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
