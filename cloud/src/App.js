import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/home/Home'
import Prices from "./components/prices/Prices"
import GetStarted from "./components/getstarted/GetStarted";

function App() {
  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/prices" element={<Prices/>}  />
          <Route exact path="/getstarted" element={<GetStarted/>} />
        </Routes>
    </>
  );
}

export default App;
