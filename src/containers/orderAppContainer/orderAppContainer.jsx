import React, { useState } from 'react';
import './orderAppContainer.css';
import OrderTable from '../../components/orderTable';

const OrderApp = () => {
  const ordersData = [
    {
      id: 1,
      name: 'Chase',
      orderInfo: 'A small Choclate ice cream with sprinkles.',
    },
    {
      id: 2,
      name: 'Billy',
      orderInfo: 'A large Strawberry ice cream with nuts.',
    },
    {
      id: 3,
      name: 'Jake',
      orderInfo: 'A small Vanilla ice cream with Oreos.',
    },
  ];

  const [orders, setOrders] = useState(ordersData);

  const addOrder = () => {
    order.id = order.length + 1 
    setOrders([...orders, order])
  }

  return (
    <div className="container">
      <h1>Order Ice Cream Here</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add order</h2>
          
        </div>
        <div className="flex-large">
          <h2>View orders</h2>
          <OrderTable orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
