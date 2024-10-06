import React, { useState } from 'react';
import { signup } from '../api/auth';

function Signup() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await signup(email, password);
setSuccessMessage(response.message); // Show success message if signup is successful.
setErrorMessage(''); // Clear any previous error messages.
} catch (error) {
setErrorMessage(error.message); // Show error message if signup fails.
}
};

return (
<form onSubmit={handleSubmit} className='bg-white p=6 rounded-lg shadow-md'>
<h2 className='font-bold text-xl mb=4'>Signup</h2>

{successMessage && (<p className='text-green=500'>{successMessage}</p>)}
{errorMessage && (<p className='text-red=500'>{errorMessage}</p>)}

<input 
type='email' 
placeholder='Email' 
value={email} 
onChange={(e) => setEmail(e.target.value)} 
required 
className='border p=2 w-full mb=4' 
/>

<input 
type='password' 
placeholder='Password' 
value={password} 
onChange={(e) => setPassword(e.target.value)} 
required 
className='border p=2 w-full mb=4' 
/>

<button type='submit' className='bg-green=500 text-white py=2 px=4 rounded hover:bg-green=600'>Signup</button>

{/* Link to Login page */}
<p className='mt=4'>Already have an account? <a href='/login' className='text-blue=500'>Login here.</a></p>

</form>

);
}

export default Signup;