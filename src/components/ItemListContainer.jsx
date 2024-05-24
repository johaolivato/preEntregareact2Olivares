import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div>
    <h2>{item.name}</h2>
    <Link to={`/item/${item.id}`}>Ver detalles</Link>
  </div>
);

const ItemListContainer = ({ greeting }) => {
  const items = [
    { id: 'cintas1', name: 'Ramo de cintas' },
    { id: 'confeti1', name: 'Confeti de colores' },
    { id: 'varitas1', name: 'Varitas de buenos deseos' }
  ];

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
