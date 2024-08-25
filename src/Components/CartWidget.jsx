import { Link } from 'react-router-dom';
import carrito from '../assets/cart.png';

export const CartWidget = () => (

<Link to="/cart">
<img src={carrito} height={50}/> 
<span>5</span>
</Link>
)
