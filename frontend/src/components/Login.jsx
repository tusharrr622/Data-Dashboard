import React from 'react';
import '../stylesheets/Login.css';

function Login() {

  const handleLogin = (event) => {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000)
  }

  return (
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input type="email" className='email' placeholder='admin@gmail.com' />
      <label>Password</label>
      <input type="password" className='password' placeholder='Enter your password' />
      <input type="submit" value="Login now" className='login' />
    </form>

  )
}

export default Login