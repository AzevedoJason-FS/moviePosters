import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import OriginalPosters from "./pages/OriginalPosters";
import Collections from "./pages/Collections";
import Products from "./pages/Products";
import Framing from "./pages/Framing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/original-posters' element={<OriginalPosters />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='posters/products/:posterId' element={<Products />} />
          <Route path='collections/:collectionId' element={<Collections />} />
          <Route path='/framing' element={<Framing />} />
          <Route path='/framing' element={<Framing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    







    </div>
  );
}

export default App;
