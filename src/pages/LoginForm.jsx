import { useState, useEffect } from 'react';
import { register, login, logout, getUser } from './Auth.jsx';

const LoginForm = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        const userData = await getUser();
        setUser(userData);
      };
  
      fetchUser();
    }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const success = await login(username, password);
    
    if (success) {
        const userData = await getUser();
        setUser(userData);
        window.location.href = './Home';
    } else {
        alert('Login failed');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;