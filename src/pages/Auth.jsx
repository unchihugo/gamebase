import axios from 'axios';

// Handle registration requests
export const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost/gamebase/authApi.php', {
        action: 'register',
        username,
        password
      });
  
      return response.data.success;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  // Handle login requests
  export const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost/gamebase/authApi.php', {
        action: 'login',
        username,
        password
      });
  
      return response.data.success;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  // Handle logout requests
  export const logout = async () => {
    try {
      const response = await axios.post('http://localhost/gamebase/authApi.php', {
        action: 'logout'
      });
  
      return response.data.success;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  // Handle user requests
  export const getUser = async () => {
    try {
      const response = await axios.get('http://localhost/gamebase/authApi.php', {
        params: {
          action: 'user'
        }
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  