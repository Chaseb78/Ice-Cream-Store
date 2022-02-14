import React, { useState } from 'react';

const AddOrderForm = (props) => {
  const initialFormState = { id: null, name: '', orderInfo: '' };
  const [order, setOrder] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setOrder({ ...order, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!order.name || !order.orderInfo) return;

        props.addOrder(order);
        setOrder(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        style={{ color: 'white' }}
        type="text"
        name="name"
        value={order.name}
        onChange={handleInputChange}
      />
      <label>Order</label>
      <input
        style={{ color: 'white' }}
        type="text"
        name="orderInfo"
        value={order.orderInfo}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddOrderForm;
