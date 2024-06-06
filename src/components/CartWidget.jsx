import React from 'react';
import { FaHeart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 3; // Número hardcodeado
  return (
    <div className="d-flex align-items-center">
      <FaHeart />
      <span className="ms-2">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
