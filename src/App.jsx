import './App.css';
import Car from './pages/CarRental.jsx';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
 import  Login  from './pages/Login.jsx';
import Signup  from './pages/Singup.jsx';
import Home from './pages/Home.jsx';
import Attraction from './pages/Attractions.jsx';
import Taxi from './pages/Airport taxi.jsx';
import Flight from './pages/Flight.jsx';
import Result from './pages/SearchResult.jsx';
import RoomPage from './pages/RoomPage.jsx'; 
import RoomDetail from './pages/RoomDetail';
import Place from './pages/palce.jsx'
// import List from './pages/List.jsx';

// import Result from './pages/SearchResult';


function App() {
return (
    

    // <Result />
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
            <Route path ="/search" element={<Result />}/>
            <Route path='/room/:hotelName' element={<RoomPage />} /> {/* Dynamic route for room pages */}
            <Route path="/room/:roomId" element={<RoomDetail />} />
            <Route path="/roomPage" element={<RoomPage />} />
            <Route path="/place" element={<Place />} />
        </Routes>
    </BrowserRouter>


);
}export default App; 
