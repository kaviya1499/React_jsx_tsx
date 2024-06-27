import { useState } from 'react';
import { submitAccountInfo } from '../ts/ApiCall';

export const useFormHandler = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobilenumber: 0,
    businessname: '',
    businessaddress: '',
    vac: 0,
    bank: '',
    branchdetails: '',
    ifsc: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Submitting Form Data:', formData);

    try {
      const result = await submitAccountInfo(formData);
      console.log('API Response:', result);

      if (result.success) {
        alert('Account info submitted successfully');
      } else {
        alert('Error submitting account info: ' + result.error);
      }
    } catch (error) {
      console.error('Error submitting account info:', error);
      alert('Error submitting account info. Please try again later.');
    }
  };

  return { formData, handleChange, handleSubmit };
};
