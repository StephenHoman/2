import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import LoginPage from './Login/loginpage.js';
import HomePage from './HomePage/homepage.js';
import Computers from './pages/Computers.js';
import Supplies from './pages/Supplies.js';
import Books from './pages/Books.js';
import Apparel from './pages/Apparel.js';
import Cart from './pages/Cart.js';
import Navbars from './HomePage/navbar.js';
 
 function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    // Check if the user is already authenticated
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('auth');
  };
 

  return (
    <BrowserRouter>
      <Routes>
 
        <Route path="/" element={isLoggedIn ? <HomePage user={user} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/computers" element={isLoggedIn ? <Computers />: <LoginPage onLogin={handleLogin} />} />
        <Route path="/supplies" element={isLoggedIn ? <Supplies />: <LoginPage onLogin={handleLogin} />} />
        <Route path="/apparel" element={isLoggedIn ? <Apparel />: <LoginPage onLogin={handleLogin} />} />
        <Route path="/books" element={isLoggedIn ? <Books />: <LoginPage onLogin={handleLogin} />} />
        <Route path="/cart" element={isLoggedIn ? <Cart />: <LoginPage onLogin={handleLogin} />} />
      </Routes>
      {isLoggedIn ? <Navbars isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : null}
    </BrowserRouter>
  );
}

export default App;
