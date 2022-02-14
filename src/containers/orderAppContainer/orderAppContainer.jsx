import React from 'react';
import './orderAppContainer.css';
import OrderTable from '../../components/orderTable';

const OrderApp = () => {
  const orderData = [];

  return (
    <div className="container">
      <h1>Order Ice Cream Here</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add order</h2>
        </div>
        <div className="flex-large">
          <h2>View orders</h2>
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
