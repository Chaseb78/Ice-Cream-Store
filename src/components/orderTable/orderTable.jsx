import React from 'react';

const OrderTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Order </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.orders.length > 0 ? (
        props.orders.map((order) => (
          <tr key={order.id}>
            <td> {order.name} </td>
            <td> {order.orderInfo} </td>
            <td>  <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button> </td> </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}> No Orders </td></tr>
      )}
    </tbody>
  </table>
);

export default OrderTable;
