import React from 'react';

const IceCream = (props) => {
  return (
    <div>
      {props.bestFlavors} {props.bestTopping} {props.calories}
      {props.coneChoices}
    </div>
  );
};

export default IceCream;
