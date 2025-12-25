import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify'; // यह import करें

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('balaJiCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('balaJiCart', JSON.stringify(cart));
  }, [cart]);

  const showNotification = (message, type = 'success') => {
    if (type === 'success') {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === 'error') {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        const newCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        showNotification(`${product.name} की quantity updated! 🛒`, 'success');
        return newCart;
      } else {
        const newCart = [...prevCart, { ...product, quantity }];
        showNotification(`${product.name} cart में add हो गया! 🎉`, 'success');
        return newCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const removedProduct = prevCart.find(item => item.id === productId);
      if (removedProduct) {
        showNotification(`${removedProduct.name} cart से remove हो गया! ❌`, 'error');
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Cart cleared! 🗑️', 'error');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      showNotification
    }}>
      {children}
    </CartContext.Provider>
  );
};