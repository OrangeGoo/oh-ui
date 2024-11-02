'use client'; // Add this at the top to mark this component as a Client Component

import * as React from 'react';
import RegisterForm from '../components/Register/RegisterForm';

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <RegisterForm />
    </div>
  );
}
