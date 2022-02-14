import React from 'react';

const IceCream = (props) => {
  return <div> {props.bestFlavors} {props.bestTopping} {props.calories} </div>;
};

export default IceCream;
