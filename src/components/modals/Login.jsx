import React, { useState } from 'react';
import { toast } from 'react-toastify'; // ✅ Added toast import
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// Import the API functions we created
import { login, googleSignIn } from '../../../api.js';

// IMPORTANT: Replace this with your actual Google Client ID from the Google Cloud Console
// const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

/**
 * This is a wrapper component. The GoogleOAuthProvider must be an ancestor
 * of any component that uses the GoogleLogin button. A good place for it
 * is wrapping your entire <App /> in index.js or App.js.
 */
const LoginWithGoogleProvider = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Login />
  </GoogleOAuthProvider>
);

export default function Login() {
  // State for the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // ❌ Removed error state - using toast instead
  // const [error, setError] = useState('');

  // ✅ Added loading state to prevent multiple submissions
  const [isLoading, setIsLoading] = useState(false);

  // --- Handler for standard Email/Password Login ---
  const handleEmailLogin = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    // Prevent multiple submissions
    if (isLoading) {
      console.log('⏸️ Already logging in, ignoring...');
      return;
    }

    console.log('📤 Attempting email login for:', email);
    setIsLoading(true);

    try {
      // Call the login function from our api.js file
      const response = await login({ email, password });
      
      const { token, user } = response.data;

      // SUCCESS!
      console.log('✅ Login successful:', user);
      
      // 1. Store the authentication token in the browser's local storage
      localStorage.setItem('authToken', token);
      
      // ✅ Show success toast
      toast.success(`Welcome back, ${user.first_name}! 🎉`, {
        position: "top-center",
        autoClose: 2000,
      });
      
      // 2. Clear form
      setEmail('');
      setPassword('');
      
      // 3. Redirect or reload after a short delay to show the toast
      setTimeout(() => {
        window.location.reload();
        // Or redirect to dashboard:
        // window.location.href = '/dashboard';
      }, 1500);

    } catch (err) {
      console.error('❌ Login failed:', err);
      
      // ✅ Show error toast instead of setting error state
      const message = err.response?.data?.message || 'Login failed. Please try again.';
      toast.error(message, {
        position: "top-center",
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Handler for successful Google Sign-In ---
  const handleGoogleSuccess = async (credentialResponse) => {
    console.log('📤 Google sign-in credential received');
    setIsLoading(true);

    try {
      // The `credential` is the secure token we get from Google after a successful sign-in
      const { credential } = credentialResponse;
      
      // We send this token to our backend for verification
      const response = await googleSignIn(credential);
      
      const { token, user } = response.data;

      // SUCCESS!
      localStorage.setItem('authToken', token);
      console.log('✅ Google sign-in successful:', user);
      
      // ✅ Show success toast
      toast.success(`Welcome, ${user.first_name}! Signed in with Google 🎉`, {
        position: "top-center",
        autoClose: 2000,
      });
      
      // Redirect after showing toast
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (err) {
      console.error('❌ Google sign-in failed:', err);
      
      // ✅ Show error toast
      const message = err.response?.data?.message || 'Google Sign-In failed. Please try again.';
      toast.error(message, {
        position: "top-center",
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.log('❌ Google sign-in error occurred');
    
    // ✅ Show error toast
    toast.error('Google Sign-In was unsuccessful. Please try again.', {
      position: "top-center",
      autoClose: 4000,
    });
  };

  return (
    <div className="modal modalCentered fade modal-log" id="log">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon icon-close btn-hide-popup"
            data-bs-dismiss="modal"
          />
          <div className="modal-log-wrap list-file-delete">
            <h5 className="title fw-semibold">Log In</h5>

            {/* ❌ Removed error display - using toast instead */}
            {/* {error && (
              <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
                {error}
              </div>
            )} */}

            {/* --- Standard Login Form --- */}
            <form onSubmit={handleEmailLogin} className="form-log">
              <div className="form-content">
                <fieldset>
                  <label className="fw-semibold body-md-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </fieldset>
                <fieldset>
                  <label className="fw-semibold body-md-2"> Password * </label>
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </fieldset>
                <a href="#" className="link text-end body-text-3">
                  Forgot password ?
                </a>
              </div>
              
              {/* ✅ Updated button with loading state */}
              <button 
                type="submit" 
                className="tf-btn w-100 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Login'}
              </button>
              
              <p className="body-text-3 text-center">
                Don't you have an account?
                <a
                  href="#register"
                  data-bs-toggle="modal"
                  className="text-primary"
                >
                  Register
                </a>
              </p>
            </form>

            {/* --- Social Logins --- */}
            {/* <div className="orther-log text-center">
              <span className="br-line bg-gray-5" />
              <p className="caption text-main-2">Or login with</p>
            </div>
            <ul className="list-log">
              <li>
                <a href="#" className="tf-btn btn-line w-100">
                  <i className="icon icon-facebook-2" />
                  <span className="body-md-2 fw-semibold">Facebook</span>
                </a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'center' }}>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                  width="280px"
                />
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
