import React, { useState } from 'react';
import './iceCreamStoreContainer.css';
import IceCream from '../../components/iceCreamComponent';
import Size from '../../components/sizeComponent';

const IceCreamStore = () => {
  const iceCreamFlavors = [
    { name: 'Vanilla' },
    { name: 'Choclate' },
    { name: 'Strawberry' },
    { name: 'Rainbow' },
    { name: 'CookieDough' },
  ];
  const iceCreamToppings = [
    { name: 'Sprinkles', calories: '40 calories' },
    { name: 'Nuts', calories: '20 calories' },
    { name: 'Syrup', calories: '60 calories' },
    { name: 'Oreos', calories: '45 calories' },
  ];

  const sizes = ['Small', 'Medium', 'large'];

  return (
    <div style={{ color: 'silver' }}>
      <h2 style={{ color: 'blue' }}> Ice Cream Store </h2>

      <h3> Flavors </h3>
      <div className={'menuitems'}>
        {iceCreamFlavors.map((flavor) => (
          <IceCream bestFlavors={flavor.name} />
        ))}
      </div>
      <h3> Toppings </h3>
      <div className={'menuitems'}>
        {iceCreamToppings.map((topping) => (
          <IceCream bestTopping={topping.name} calories={topping.calories} />
        ))}
      </div>
      <h3> Size </h3>
      <div className={'menuitems'} style={{ marginBottom: '15px' }}>
        {sizes.map((size) => (
          <Size sizeChoices={size} />
        ))}
      </div>
    </div>
  );
};

export default IceCreamStore;
