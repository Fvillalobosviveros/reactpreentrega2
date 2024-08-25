import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import Container from 'react-bootstrap/Container';
/* import data from '../data/Products.json'; */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


    
// eslint-disable-next-line react/prop-types
export const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();


    useEffect(() => {
      const db = getFirestore();

      const refCollection = !id 
      ? collection (db, "items") 
      : query(collection(db, "items"), where("categoryId", "==", id ));

        getDocs(refCollection)
          .then((snapshot) => {
            setItems(
              snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
              })
            );

          })
          .finally(() => setLoading(false));
        
    }, [id]);

    if (loading) return "Wait"

    

 return (
 <Container className='mt-4 d-flex'>
    {items.map(i => 
    <Card key={i.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.imageid}/>
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text> {i.description}</Card.Text>
        <Card.Text> {i.categoryid}</Card.Text>
       <Link to={`/item/${i.id}`}>
       <Button variant="primary">Ver</Button>
       </Link>
      </Card.Body>
    </Card>)}
    </Container>
 
);

};