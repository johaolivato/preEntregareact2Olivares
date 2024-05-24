import React from 'react';
import { FaHeart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado para la cantidad de elementos en el carrito
  return (
    <div className="d-flex align-items-center">
      <FaHeart />
      <span className="ms-2">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
