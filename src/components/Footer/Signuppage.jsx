import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signuppage.css';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '' || contactNumber === '') {
      alert('Please fill in all fields');
    } else {
      // Simulate a successful registration
      alert('Account created successfully');
      navigate('/LoginPage');
    }
  };

  return (
    <div className="sign">
      <div className="login-container">
        <div className="signup-content">
          <div className="login-form">
            <h2>Create your account</h2>

            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group phone-input">
                <input type="text" value="91+" disabled />
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                  placeholder="Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <button type="submit">Sign Up</button><br/><br/>
              Already have an account?{' '}
              <Link to="/LoginPage" style={{ color: '#007FFF', textDecoration: 'none', fontSize: '15px' }}>
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
