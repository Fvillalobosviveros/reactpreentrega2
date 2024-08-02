import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer"; 
import { ItemDetailContainer } from "./Components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="item/:id"  element={<ItemDetailContainer />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
