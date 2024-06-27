// AccountInfoTable.jsx

import React, { useState, useEffect } from 'react';
import { fetchAccountInfo } from '../ts/ApiCall';

const UserTable = () => {
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAccountInfo();
      if (data) {
        setAccountInfo(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Account Information</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Business Name</th>
            <th>Business Address</th>
            <th>VAC</th>
            <th>Bank</th>
            <th>Branch Details</th>
            <th>IFSC</th>
          </tr>
        </thead>
        <tbody>
          {accountInfo.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.username}</td>
              <td>{account.email}</td>
              <td>{account.mobilenumber}</td>
              <td>{account.businessname}</td>
              <td>{account.businessaddress}</td>
              <td>{account.vac}</td>
              <td>{account.bank}</td>
              <td>{account.branchdeatils || '-'}</td>
              <td>{account.ifsc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
