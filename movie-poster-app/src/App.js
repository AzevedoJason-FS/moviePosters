import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="App">
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/products' element={<Products />} />
        </Routes>
    







    </div>
  );
}

export default App;
