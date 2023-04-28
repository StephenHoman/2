import {React, useState } from 'react';
import ColoredLine from './coloredline.js';
import CreateAccount from './createAccount.js';
import styles from './LoginPage.module.css';
import data from './users1.json';
 
function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    const emailValue = event.target.value.trim();
    setEmail(emailValue);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value.trim();
    setPassword(passwordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 

    const user = data.users.find(users => users.email === email && users.password === password);

    if (user) {
      props.onLogin(user);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input type="text" id="email" placeholder="Email" name="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="password"></label>
      <input type="password" id="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />

      {error && <div className={styles['error']}>{error}</div>}

      <button type="submit">Log In</button>
      <a href="localhost:3000"> Forgot password?</a>
      <ColoredLine color="#898F9C" />
      <CreateAccount className={styles['create-account']} />
    </form>
  );
}

export default LoginForm;