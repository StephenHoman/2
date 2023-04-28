import React from 'react';
import LoginForm from './LoginForm.js';

function LoginPage(props) {
  const handleLogin = (user) => {
    props.onLogin(user);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
