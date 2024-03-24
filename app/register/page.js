"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../utils/firebase'; // Ensure this path is correct for your project structure

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard or preferred route after registration
    } catch (error) {
      console.error("Error creating account with email and password", error.message);
      alert("Failed to create account: " + error.message);
    }
  };

  // Define styles here
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: '600',
    color: '#0047AB',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    marginBottom: '30px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0052cc',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <h2 style={headerStyle}>Create Your Account</h2>
      <form onSubmit={handleRegister} style={formStyle}>
        {/* Email Field */}
        <div>
          <input
            style={inputStyle}
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Password Field */}
        <div>
          <input
            style={inputStyle}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Confirm Password Field */}
        <div>
          <input
            style={inputStyle}
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}
