import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import OriginalPosters from "./pages/OriginalPosters";
import Collections from "./pages/Collections";
import Framing from "./pages/Framing";

const App = () => {
  return (
    <div className="App">
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/original-posters' element={<OriginalPosters />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/framing' element={<Framing />} />
        </Routes>
    







    </div>
  );
}

export default App;
