import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import './Login.css';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
/* --------------------------------------------
 -----Showing login and registration component------------
 ---------------------------------------------*/
const Login = () => {
    /* --------------------------------------------
 -----declaring const variables------------
 ---------------------------------------------*/
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const auth = getAuth();

  /* --------------------------------------------
 -----function for handling google signin------------
 ---------------------------------------------*/
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user;
          console.log(user);
          history.push(redirect_url);
        })
    }
   /* --------------------------------------------
 -----function for toggling login------------
 ---------------------------------------------*/
    const toggleLogin = e => {
      setIsLogin(e.target.checked)
    }
   /* --------------------------------------------
 -----function for handling name change------------
 ---------------------------------------------*/
    const handleNameChange = e => {
      setName(e.target.value);
    }
     /* --------------------------------------------
 -----function for handling email change------------
 ---------------------------------------------*/
    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
   /* --------------------------------------------
 -----function for handling password change------------
 ---------------------------------------------*/
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
   /* --------------------------------------------
 -----function for handling registration------------
 ---------------------------------------------*/
    const handleRegistration = e => {
      e.preventDefault();
      console.log(email, password);
      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
    /* --------------------------------------------
 -----validating using regular expression------------
 ---------------------------------------------*/
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password Must contain 2 upper case');
        return;
      }
  
      if (isLogin) {
        processLogin(email, password);
      }
      else {
        registerNewUser(email, password);
      }
  
    }
   /* --------------------------------------------
 -----function for handling signin------------
 ---------------------------------------------*/
    const processLogin = (email, password) => {
        let usernew = email.split('@')[0]
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          updateProfile(auth.currentUser, { displayName: usernew })
          window.location.href = redirect_url.pathname;
        })
        .catch(error => {
          setError(error.message);
        })
    }
     /* --------------------------------------------
 -----function for setting username------------
 ---------------------------------------------*/
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
     /* --------------------------------------------
 -----function for verifying email------------
 ---------------------------------------------*/
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
     /* --------------------------------------------
 -----function for registering------------
 ---------------------------------------------*/
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          verifyEmail();
          setUserName();
          console.log(redirect_url.pathname);
        window.location.href = redirect_url.pathname;
        
          
        })
        .catch(error => {
          setError(error.message);
        })
    
    }
  
     /* --------------------------------------------------
 -----Showing login and registration form on the UI------------
 ---------------------------------------------------------*/
  
    return (
      <div className="mx-5">
        <form onSubmit={handleRegistration}>
          <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
          {!isLogin && <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
            </div>
          </div>}
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3"  placeholder="Your Email" required />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Your Password" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Login' : 'Register'}
          </button>
  
        </form>
        <br /><br /><br />
        <div>--------------------------------</div>
        <br /><br /><br />
        <div className="text-center">
            <button
                    className="btn btn-success w-50"
                    onClick={handleGoogleSignIn}
                 ><FontAwesomeIcon icon={faGoogle} /> Sign In with Google</button>
        </div>
                    
      </div>
    );
};

export default Login;