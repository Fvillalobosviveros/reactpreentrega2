import { createContext, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";


export const ItemsContext = createContext();

export const Provider = ({children}) => {
    const[items, setItems] = useState([]);

    const reset = () => setItems ([])

    const addItem = (item) =>{
        const alreadyExist = items.some((i) => i.id === item.id);

        if (alreadyExist) {
            const transform = items.map((i) => {
                if (i.id === item.id) {
                    return {...i, quantity: i.quantity + item.quantity};
                
                }else {
                    return i;

                }

            });
            setItems(transform);
        
        }else {
            setItems((prev) => [...prev, item]);

        }
    
    
    };  

    const removeItem = (id) => {
        const remove = items.find(i => i.id !== id)
        setItems(remove)

    }


    return <ItemsContext.Provider value={{addItem, items, reset, removeItem}}>
        {children}</ItemsContext.Provider>;

}