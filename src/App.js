import React from 'react';
import IceCreamStore from './containers/iceCreamStoreContainer';
import OrderApp from './containers/orderAppContainer';
import './style.css';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        paddingTop: '10px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'magenta' }}>
        Hello Welcome to the Ice Cream Store!
      </h1>
      <IceCreamStore />
      <OrderApp />
      <img
        src="https://i.pinimg.com/originals/95/53/09/955309812051bb34fae095ebb9192341.gif"
        alt="toppings on ice cream"
      />
    </div>
  );
}
