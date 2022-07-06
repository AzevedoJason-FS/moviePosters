import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import OriginalPosters from "./pages/OriginalPosters";

const App = () => {
  return (
    <div className="App">
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/original-posters' element={<OriginalPosters />} />
          <Route path='/products' element={<Products />} />
        </Routes>
    







    </div>
  );
}

export default App;
