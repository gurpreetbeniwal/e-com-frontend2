import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google'; 
import { toast } from 'react-toastify'; // <-- 1. Import toast

// Import our API functions
import { register, googleSignIn } from '../../../api';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // We no longer need the 'error' state, toastify handles it!
  // const [error, setError] = useState(''); 

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match."); // <-- 2. Use toast.error()
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await register({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      
      // 3. Use toast.success() for a better user experience!
      toast.success(`Welcome, ${user.first_name}!`); 
      
      // We can add a small delay before reloading to allow the user to see the message
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (err) {
      const message = err.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message); // <-- 4. Use toast.error() for API errors
      console.error("Registration failed:", message);
    }
  };

  // const handleGoogleSuccess = async (credentialResponse) => {
  //   try {
  //       const { credential } = credentialResponse;
  //       const response = await googleSignIn(credential);
  //       const { token, user } = response.data;

  //       localStorage.setItem('authToken', token);
  //       toast.success(`Welcome, ${user.first_name}!`);
        
  //       setTimeout(() => {
  //           window.location.reload();
  //       }, 1500);

  //   } catch (err) {
  //       const message = err.response?.data?.message || 'Google Sign-Up failed.';
  //       toast.error(message);
  //   }
  // };

  // const handleGoogleError = () => {
  //   toast.error('Google Sign-Up was unsuccessful. Please try again.');
  // };

  return (
    <div className="modal modalCentered fade modal-log" id="register">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon icon-close btn-hide-popup"
            data-bs-dismiss="modal"
          />
          <div className="modal-log-wrap list-file-delete">
            <h5 className="title fw-semibold">Sign Up</h5>
            
            {/* The old error display is no longer needed */}

            <form onSubmit={handleRegister} className="form-log">
              {/* ... form content remains the same ... */}
              <div className="form-content">
                <fieldset>
                  <label className="fw-semibold body-md-2">First Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                  />
                </fieldset>
                <fieldset>
                  <label className="fw-semibold body-md-2">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                  />
                </fieldset>
                <fieldset>
                  <label className="fw-semibold body-md-2">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </fieldset>
                <fieldset>
                  <label className="fw-semibold body-md-2">Password *</label>
                  <input 
                    type="password" 
                    placeholder="Enter a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </fieldset>
                <fieldset>
                  <label className="fw-semibold body-md-2">Confirm Password *</label>
                  <input 
                    type="password" 
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                </fieldset>
              </div>
              <button type="submit" className="tf-btn w-100 text-white">
                Sign Up
              </button>
              <p className="body-text-3 text-center">
                Already have an account?
                <a href="#log" data-bs-toggle="modal" className="text-primary">
                  Sign in
                </a>
              </p>
            </form>
            <div className="orther-log text-center">
              <span className="br-line bg-gray-5" />
              <p className="caption text-main-2">Or sign up with</p>
            </div>
            <ul className="list-log">
              <li>
                <a href="#" className="tf-btn btn-line w-100">
                  <i className="icon icon-facebook-2" />
                  <span className="body-md-2 fw-semibold">Facebook</span>
                </a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                  width="280px"
                /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

