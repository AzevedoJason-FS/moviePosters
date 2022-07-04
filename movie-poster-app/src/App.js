import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <div className="App">
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
    







    </div>
  );
}

export default App;
