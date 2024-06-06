import React from 'react';

const Item = ({ item }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Precio: {item.price}</p>
      </div>
    </div>
  </div>
);

export default Item;
