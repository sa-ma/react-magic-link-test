import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../services/magic';
import './Authenticate.css';

const Authenticate = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!email) {
      setError('Email is Invalid');
      return;
    }
    try {
      await loginUser(email);
      setLoading(false);
      history.replace('/dashboard');
    } catch (error) {
      setError('Unable to log in');
      console.error(error);
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="magic-form">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form__title">React Magic Form</h1>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Enter Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form__input"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <p className="form__error-message">{error}</p>
        <button className="form__button">
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Authenticate;
