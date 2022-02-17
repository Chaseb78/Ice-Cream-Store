import React, { useState } from 'react';
import './iceCreamStoreContainer.css';
import IceCream from '../../components/iceCreamComponent';
import Size from '../../components/sizeComponent';

const IceCreamStore = () => {
  const iceCreamFlavors = [
    { name: 'Vanilla', calories: '120 calories' },
    { name: 'Choclate', calories: '210 calories' },
    { name: 'Strawberry', calories: '175 calories' },
    { name: 'Rainbow', calories: '150 calories' },
    { name: 'CookieDough', calories: '250 calories' },
  ];
  const iceCreamToppings = [
    { name: 'Sprinkles', calories: '40 calories' },
    { name: 'Nuts', calories: '20 calories' },
    { name: 'Syrup', calories: '60 calories' },
    { name: 'Oreos', calories: '45 calories' },
  ];

  const coneOptions = [
    { name: 'Waffle', calories: '80 calories' },
    { name: 'Sugar', calories: '100 calories' },
    { name: 'Pretzel', calories: '90 calories' },
  ];

  const sizes = ['Small', 'Medium', 'large'];

  return (
    <div style={{ color: 'silver' }}>
      <h2 style={{ color: 'blue' }}> Ice Cream Store Menu </h2>
      <h3>Cone Options</h3>
      <div className={'menuitems'}>
        {coneOptions.map((option) => (
          <IceCream coneChoices={option.name} calories={option.calories}  />
        ))}
      </div>
      <h3> Size </h3>
      <div className={'menuitems'} style={{ marginBottom: '15px' }}>
        {sizes.map((size) => (
          <Size sizeChoices={size} />
        ))}
      </div>
      <h3> Flavors </h3>
      <div className={'menuitems'}>
        {iceCreamFlavors.map((flavor) => (
          <IceCream bestFlavors={flavor.name} calories={flavor.calories} />
        ))}
      </div>
      <h3> Toppings </h3>
      <div className={'menuitems'}>
        {iceCreamToppings.map((topping) => (
          <IceCream bestTopping={topping.name} calories={topping.calories} />
        ))}
      </div>
    </div>
  );
};

export default IceCreamStore;
