// Dummy authentication API functions

export const login = async (email, password) => {
    // Simulate a login API call with dummy data
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password123") {
          resolve({ token: 'dummy_token', user: { email } });
        } else {
          throw new Error("Invalid credentials");
        }
      }, 1000);
    });
  };
  
  export const signup = async (email, password) => {
    // Simulate a signup API call with dummy data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'User created successfully!' });
      }, 1000);
    });
  };