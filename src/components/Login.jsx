import React, { useState } from 'react';
import { login } from '../api/auth';

function Login() {
  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await login(email, password);
console.log(response); // Handle login response (e.g., store token)
} catch (error) {
setErrorMessage(error.message); // Show error message if login fails.
}
};

return (
<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
<h2 className="font-bold text-xl mb-4">Login</h2>

{errorMessage && (<p className='text-red-500'>{errorMessage}</p>)}

<input 
type='email' 
placeholder='Email' 
value={email} 
onChange={(e) => setEmail(e.target.value)} 
required 
className='border p-2 w-full mb-4' 
/>

<input 
type='password' 
placeholder='Password' 
value={password} 
onChange={(e) => setPassword(e.target.value)} 
required 
className='border p-2 w-full mb-4' 
/>

<button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Login</button>

{/* Link to Signup page */}
<p className='mt-4'>Don't have an account? <a href='/signup' className='text-blue-500'>Sign Up here.</a></p>

</form>

);
}

export default Login;