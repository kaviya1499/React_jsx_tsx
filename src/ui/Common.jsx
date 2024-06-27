import React from 'react';
import { useNavigate } from 'react-router-dom';

const Common = () => {

  const navigate = useNavigate();

    const handleFormButtonClick = () => {
      navigate('/adduser');
    };

    const handleDetailsButtonClick = () => {
          navigate('/usertable');
        };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <button onClick={handleFormButtonClick}>Go to Register Form</button>
      <button onClick={handleDetailsButtonClick}>Go to All User Details</button>
    </div>
  );
};

export default Common;
