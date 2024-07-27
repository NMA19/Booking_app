import  { useState } from 'react';
import RoundTrip from './../components/Flight menus/round-trip.jsx'
import OneWay from './../components/Flight menus/one-way.jsx'
import MultiDestination from './../components/Flight menus/multi-destination.jsx'
import './Flight.css'
import ButtonUsage from "../components/ui/Button.jsx"
import List from '../components/ui/List.jsx'
import { useNavigate } from 'react-router';

const Flight = () => {
  const [tripType, setTripType] = useState('Round-trip');

  const handleRadioChange = (event) => {
    setTripType(event.target.value);
  };

  // --------------------------- Search Button -----------------------------
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/login", { state: { destination, date, options } });
  };

  return (
    <div>
      <div className="bg-red-900 p-1 h-[200px]">
        <h1 className="m-4 relative left-20 text-white font-bold">
        TravelEase
        </h1>
        <ButtonUsage />
        <List/>
      </div>
      <div className="searchFlightDiv w-3/5">
        <h1 className="text-3xl font-bold mb-3 text-red-900">Find your next flight deal</h1>
        <div className="radioDiv">
          <label>
            <input 
              type="radio" 
              value="Round-trip" 
              checked={tripType === 'Round-trip'}
              onChange={handleRadioChange}
            />
            Round-trip
          </label>
          <label>
            <input 
              type="radio" 
              value="One-way"
              checked={tripType === 'One-way'}
              onChange={handleRadioChange}
            />
            One-way
          </label>
          <label>
            <input 
              type="radio" 
              value="Multi-destination"
              checked={tripType === 'Multi-destination'}
              onChange={handleRadioChange}
            />
            Multi-destination
          </label>
        </div>
        {tripType === "Round-trip" && <RoundTrip />}
        {tripType === "One-way" && <OneWay />}
        {tripType === "Multi-destination" && <MultiDestination />}
        <button
          className="rounded-lg bg-orange-500 mt-2 py-3 px-[10%] font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          // data-ripple-light="true"
          onClick={handleSearch}
        >
          Find your flight
        </button>
      </div>
    </div>
  )
}

export default Flight;