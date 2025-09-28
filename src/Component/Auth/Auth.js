// export const authenticateUser = (username, password) => {
//   const validUser = {
//     username: 'admin',
//     password: 'password123',
//   };

//   return username === validUser.username && password === validUser.password;
// };

export const authenticateUser = (username, password) => {
  const validUser = {
    username: 'admin',
    password: 'password123',
  };

  // For session persistence in a mock environment (like before the Firebase update)
  if (username === validUser.username && password === validUser.password) {
    localStorage.setItem('userLoggedIn', 'true');
    return true;
  }
  return false;
};

/**
 * Logs out the user by clearing any mock session state.
 * In a full Firebase application, this would call Firebase signOut().
 */
export const logoutUser = async () => {
    // Clear mock session storage
    localStorage.removeItem('userLoggedIn');
    
    // Simulate API call delay for demonstration
    return new Promise(resolve => setTimeout(resolve, 300));
};
