import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc, count } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';

import { ItemsContext } from '../Context/ItemsContext';
import { ItemCount } from './ItemCount';

// eslint-disable-next-line react/prop-types
export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

    const {addItem} = useContext(ItemsContext)  

    const onAdd = (count) => {
      addItem({...item, quantity: count})
      
    }

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id );

    getDoc(refDoc)
    .then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()});

    })
    .finally(() => setLoading(false));

  }, [id]);





  if (loading) return "Wait";


  return (
    <Container className='mt-4'>
      <h1>{item.title}</h1>
      <h2>{item.categoryid}</h2>
      <h3>{item.description}</h3>
      <img src={item.imageid} height={200} />
      <p>{item.price}</p>
      <ItemCount stock={item.stock} onAdd={onAdd}/>
      
      <br />
    </Container>
  );
};
