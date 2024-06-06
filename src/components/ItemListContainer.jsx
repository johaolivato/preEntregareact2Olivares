import React from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

import cintasImage from '../assets/cintas.jpg';
import confetiImage from '../assets/confeti.jpg';
import varitasImage from '../assets/varitas.jpg';

const items = [
  { id: 'cintas1', name: 'Ramo de cintas', price: '$30.000', image: cintasImage, category: 'cintas', description: 'Un hermoso ramo de cintas de colores para celebrar.' },
  { id: 'confeti1', name: 'Confeti de colores', price: '$20.000', image: confetiImage, category: 'confeti', description: 'Confeti multicolor personalizado con tus colores favoritos.' },
  { id: 'varitas1', name: 'Varitas de buenos deseos', price: '$10.000', image: varitasImage, category: 'varitas', description: 'Varitas mágicas hechas con amor para repartir buenos deseos.' }
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const filteredItems = categoryId ? items.filter(item => item.category === categoryId) : items;

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <div className="row">
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
