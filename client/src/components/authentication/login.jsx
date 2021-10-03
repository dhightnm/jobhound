import React, { useState } from 'react';

const Login = () => { 

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  


  return (
    <>
    <h1>Login</h1>
    <form classname='login-form'>
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
    </>
  )
}

export default Login;
