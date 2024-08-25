import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./Components/ItemListContainer"; 
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import { NavBar } from "./Components/NavBar";
import {Cart} from "./Components/Cart";
import { Provider } from "./Context/ItemsContext";


function App() {
  
  return (
    <Provider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id"  element={<ItemDetailContainer />} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="*" element={404}/>
      </Routes>
    </BrowserRouter>
    </Provider> 
  );
}

export default App;
