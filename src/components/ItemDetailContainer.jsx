import React from 'react';
import { useParams } from 'react-router-dom';

import cintasImage from '../assets/cintas.jpeg';
import confetiImage from '../assets/confeti.jpeg';
import varitasImage from '../assets/varitas.jpeg';

const productDetails = {
  cintas1: {
    name: 'Ramo de cintas',
    description: 'Un hermoso ramo de cintas de colores para celebrar.',
    price: '$30.000',
    image: cintasImage 
  },
  confeti1: {
    name: 'Confeti de colores',
    description: 'Confeti multicolor personalizado con tus colores favoritos.',
    price: '$20.000',
    image: confetiImage 
  },
  varitas1: {
    name: 'Varitas de buenos deseos',
    description: 'Varitas mágicas hechas con amor para repartir buenos deseos.',
    price: '$10.000',
    image: varitasImage 
  }
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = productDetails[id];

  return (
    <div className="container mt-4">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} /> {/* Agrega la imagen */}
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
