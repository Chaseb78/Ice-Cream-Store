import React, { useState, useEffect } from 'react';

const EditOrderForm = (props) => {
  const [order, setOrder] = useState(props.currentOrder);

  useEffect(() => {
    setOrder(props.currentOrder);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setOrder({ ...order, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateOrder(order.id, order);
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
      <button>Update Order</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditOrderForm;
