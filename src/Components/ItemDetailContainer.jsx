import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/Products.json';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    })
    .then((response) => {
      const finded = response.find((i) => i.id === Number(id));
      setItem(finded);
    })
    .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Container className='mt-4'>Wait...</Container>;

  if (!item) return <Container className='mt-4'>No se encontró el producto</Container>;

  return (
    <Container className='mt-4'>
      <h1>Producto</h1>
      <h2>{item.name}</h2>
      <img src={item.img} height={200} />
      <h4>{item.category}</h4>
      <p>{item.detail}</p>
    </Container>
  );
};
