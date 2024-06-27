import React from 'react';
import { useFormHandler } from '../js/AddUserForm';
import '../css/adduserform.css';

const AddUserForm = () => {
  const { formData, handleChange, handleSubmit } = useFormHandler();

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Mobile Number:
        <input type="number" name="mobilenumber" value={formData.mobilenumber} onChange={handleChange} />
      </label>
      <label>
        Business Name:
        <input type="text" name="businessname" value={formData.businessname} onChange={handleChange} />
      </label>
      <label>
        Business Address:
        <input type="text" name="businessaddress" value={formData.businessaddress} onChange={handleChange} />
      </label>
      <label>
        VAC:
        <input type="number" name="vac" value={formData.vac} onChange={handleChange} />
      </label>
      <label>
        Bank:
        <input type="text" name="bank" value={formData.bank} onChange={handleChange} />
      </label>
      <label>
        Branch Details:
        <input type="text" name="branchdetails" value={formData.branchdetails} onChange={handleChange} />
      </label>
      <label>
        IFSC:
        <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserForm;
