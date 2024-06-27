import React, { useState } from 'react';

const UsernameValidation = ( {username, onChange }) => {
   const [error, setError] = useState('');
       if (typeof value !== 'string' || value.trim() === '') {
         setError('Username must be a non-empty string');
       } else {
         setError('');
       }
}