import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
 import  Login  from './pages/Login.jsx';
import Signup  from './pages/Singup.jsx';
import Home from './pages/Home.jsx';
import Car from './pages/CarRental.jsx';
import Attraction from './pages/Attractions.jsx';
import Taxi from './pages/Airport taxi.jsx';
import Flight from './pages/Flight.jsx';

// import List from "./pages/Listt";
// import List from './pages/List.jsx';




function App() {
return (
    // <Home />

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path ="/login" element={<Login />}/>
            <Route path ="/register" element={<Signup />}/>
            <Route path ="/acc" element={<Login />}/>
            <Route path ="/flight" element={<Flight />}/>
            <Route path ="/car" element={<Car />}/>
            <Route path ="/attraction" element={<Attraction />}/>
            <Route path ="/taxi" element={<Taxi />}/>
        </Routes>
    </BrowserRouter>


);
}export default App; 
