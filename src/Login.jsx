import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Input from './Input'; 


import {
  signInWithGooglePopup,
  createuserdocfromAuth,
  userDocRef,
  signinAuthUserWithEmailAndPassword,
} from './utils/firebase';

function Login() {
  const navigate = useNavigate();

  const userlogGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createuserdocfromAuth(user);
      // Use navigate to redirect to the success page after successful Google login
      navigate('/success');
    } catch (error) {
      console.log('error in Google login', error.message);
    }
  }

  const [contact, setcontact] = useState({
    email: '',
    password: '',
  });
  const { email, password } = contact;

  async function handleClick(event) {
    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      // Redirect to the success page after successful email/password login
      navigate('/success');
    } catch (error) {
      console.log('error in login', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  const goToNavigationPage = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <Input
        name="email"
        type="email"
        placeholder="email"
        onChange={handlepass}
      />
      <br></br>
      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handlepass}
      />
      <br></br>
      <button className="button2" onClick={handleClick}>
        Login in
      </button>
      <br></br>
      <button className="button2" onClick={userlogGoogle}>
        Login with Google
      </button>
      <br></br>
      <Link to="/signup">Signup Instead</Link>

      {/* Button to redirect to the Navigation page */}
      <button className="button2" onClick={() => goToNavigationPage(navigate)}>
        Go to Navigation
      </button>

    </div>
  );
}

export default Login;
