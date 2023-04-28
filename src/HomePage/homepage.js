import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import LoginPage from '../Login/loginpage.js';
import MainPageContainer from './homepagecontainer.js';
import Heroimage from './heroImage.js';
import Footer from './Footer.js';

function HomePage(props) {
  const [cookies, setCookie ] = useCookies(['isLoggedIn', 'user']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = cookies.isLoggedIn === 'true';
    setIsLoggedIn(loggedIn);
    setUser(loggedIn ? cookies.user : null);
  }, [cookies]);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    setCookie('isLoggedIn', 'true', { path: '/' });
    setCookie('user', user, { path: '/' });
  };

   

  return (
    <div>
      {isLoggedIn ? (
        <div>
         
          <div><Heroimage /></div>
          <div><MainPageContainer /></div>
          <h1>Hello {user.email}</h1>
          <div><Footer /></div>
        </div>
      ) : (
        <div>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
