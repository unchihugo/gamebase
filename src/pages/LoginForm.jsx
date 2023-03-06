import axios from "axios";

import NavBar from '../templates/NavBar';
import SideBar from '../templates/SideBar';

const LoginForm = () => {

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
  
    const response = await axios.get('http://localhost/gamebase/authApi.php');

    for (let i=0; i<response.data.length; i++) {
      if (response.data[i].Gebruikersnaam === username && response.data[i].Wachtwoord === password) {
        localStorage.setItem('idGebruiker', JSON.stringify(response.data[i]));
      }
    }

    if (localStorage.getItem('idGebruiker') !== null) {
      window.location.href = './Home';
    } else {
        alert('Login failed');
    }
  }

  return (
    <div className='flex flex-col relative'>
    <NavBar/>
  <div className='flex min-h-screen'>
    <div className='fixed h-screen'>
      <SideBar/>
    </div>
    <div className='md:container md:mx-auto pt-16 lg:pl-60 text-white'>

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
    </div>
    </div>
    </div>
  );
}

export default LoginForm;