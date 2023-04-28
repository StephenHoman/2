import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.css';

function CreateAccount(props) {
  const { className } = props;

  return (
    <div className={`${styles['create-account']} ${className}`}>
      <button>Create Account</button>
    </div>
  );
}

CreateAccount.propTypes = {
  className: PropTypes.string,
};

export default CreateAccount;
