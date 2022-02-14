import React from 'react';

const OrderTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Order Details</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Order data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default OrderTable;
