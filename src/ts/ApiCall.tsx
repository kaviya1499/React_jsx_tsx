import React, { useEffect, useState } from 'react';
import { FormDataTypes } from './FormDataTypes';

export const fetchAccountInfo = async () => {
  try {
    const response = await fetch('http://172.16.4.64:8080/getAccountInfo');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error fetching account info:', error);
    return [];
  }
};

export const submitAccountInfo = async (formData: FormDataTypes) => {
  try {
    const response = await fetch('http://172.16.4.64:8080/saveAccountInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Error submitting account info:', error);
    return { success: false, error };
  }
};

/*
const AccountInfoComponent: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState<any>(null);

  useEffect(() => {
    // Fetch data using fetchAccountInfo function
    const fetchData = async () => {
      const data = await fetchAccountInfo();
      setAccountInfo(data);
    };
    fetchData();
  }, []);

  return null;
};

export default AccountInfoComponent;
 */
