import React, { useState } from 'react';
import './orderAppContainer.css';
import OrderTable from '../../components/orderTableComponent';
import AddOrderForm from '../../components/addOrderComponent';
import EditOrderForm from '../../components/editOrderFormComponent';

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

  const initialFormState = { id: null, name: '', orderInfo: '' };

  const [orders, setOrders] = useState(ordersData);
  const [editing, setEditing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(initialFormState);

  const addOrder = (order) => {
    order.id = orders.length + 1;
    setOrders([...orders, order]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const editRow = (order) => {
    setEditing(true);

    setCurrentOrder({
      id: order.id,
      name: order.name,
      orderInfo: order.orderInfo,
    });
  };

  const updateOrder = (id, updatedOrder) => {
    setEditing(false);

    setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
  };

  return (
    <div className="container">
      <h1>Order Ice Cream Here</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditOrderForm
                setEditing={setEditing}
                currentOrder={currentOrder}
                updateOrder={updateOrder}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddOrderForm addOrder={addOrder} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View orders</h2>
          <OrderTable
            orders={orders}
            editRow={editRow}
            deleteOrder={deleteOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderApp;
