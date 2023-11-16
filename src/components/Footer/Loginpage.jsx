import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Loginpage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Check if the provided username and password match the expected values
      if (username === 'mounisha' && password === '12345') {
        // Simulate a successful login
        localStorage.setItem('token', 'your_generated_token');
        alert('Login Successful');
        navigate('/Profile');
      } else {
        // Simulate an unsuccessful login
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className='log'>
      <div className="login-container" >
        <div className="login-content">
          <div className="login-form">
            <h2>Login</h2>
        
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button><br/><br/>
              Don't have an account? <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Create a new account</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
