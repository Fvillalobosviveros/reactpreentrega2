import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';
import { ItemsContext } from '../Context/ItemsContext';

const initialValues = {
    phone: "",
    email: "",
    name:""
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { reset, removeItem, items } = useContext(ItemsContext);
 
    return (
        <Container>
            <button onClick={reset}>Vaciar</button>
            {items.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                items.map((i) => (
                    <div key={i.id}>
                        <h1>{i.title}</h1>
                        <h2>{i.price}</h2>
                        <h3>{i.quantity}</h3>
                        <img src={i.imageid} alt={i.title} height={100} />
                        <span onClick={() => removeItem(i.id)}>X</span>
                    </div>
                ))
            )}
        </Container>
    );
};
