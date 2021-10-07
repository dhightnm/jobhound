import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../../css/Login.module.css';
const Login = () => { 

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  return (
    <div className={styles.loginContainer}>
    <h1>Login</h1>
    <form className={styles.loginForm}>
      <h3>Username:</h3>
        <input 
          type='text' 
          label='username' 
          placeholder='Username'
          onChange={e => setUsername(e.target.value)}
          />
      <h3>Password:</h3>
        <input 
        type='text' 
        label='password' 
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}/>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Login;
