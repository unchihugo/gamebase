import axios from "axios";

const LoginForm = () => {
  // function for handleLogin to work with the database with axios.get from the api
  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
  
    const response = await axios.get('http://localhost/gamebase/authApi.php');

    for (let i=0; i<response.data.length; i++) {
      if (response.data[i].Gebruikersnaam === username && response.data[i].Wachtwoord === password) {
        localStorage.setItem('idGebruiker', response.data[i].idGebruiker);
      }
    }
    
    if (localStorage.getItem('idGebruiker') !== null) {
      window.location.href = './home';
    } else {
        alert('Login failed');
    }

    console.log(localStorage.getItem('idGebruiker'));
  }

  return (

  <div className="text-white"> 
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input className="text-black" type="text" name="username" required />
      </label>
      <label>
        Password:
        <input className="text-black" type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
    </div>
  );
}

export default LoginForm;