import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file 
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [destination, setDestination] = useState("");  
  const [openDate, setOpenDate] = useState(false);  
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false); 
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1
    }));
  };

  const handleSearch = () => {
    navigate("/list", { state: { destination, date, options } });
  };

  return (
    <div className="search inline-flex gap-10 p-2 px-14 relative left-32 bottom-5 border-solid bg-white border-2 border-yellow-500 text-gray-400 rounded-lg">
      <div className="m-2">
        <FontAwesomeIcon icon={faBed} />
        <input 
          style={{ marginLeft: '10px' }} 
          type="text" 
          placeholder="Where are you going?" 
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="m-2">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span onClick={() => setOpenDate(!openDate)} style={{ marginLeft: '10px' }}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            className="absolute left-96 top-12"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </div>
      <div className="m-2">
        <FontAwesomeIcon icon={faPerson} />
        <span onClick={() => setOpenOptions(!openOptions)} style={{ marginLeft: '10px' }}>
          {`${options.adult} adult . ${options.children} children . ${options.room} room`}
        </span>
        {openOptions && (
          <div className="absolute bg-sky-900 text-cyan-50 rounded-xl inline-block top-14 border-yellow-400 border-4 left-[62%] w-72 h-48">
            <div className="items">
              <span className="absolute bottom-[78%] left-6">Adult</span>
              <button
                className="absolute left-[37%] top-3 bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2 disabled:cursor-not-allowed"
                onClick={() => handleOption("adult", "d")}
                disabled={options.adult <= 1}
              >
                -
              </button>
              <span className="absolute left-[58%] bottom-[78%]">{options.adult}</span>
              <button
                className="absolute right-[16%] top-3 bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2"
                onClick={() => handleOption("adult", "i")}
              >
                +
              </button>
            </div>
            <div className="items">
              <span className="absolute bottom-[46%] left-6">Children</span>
              <button
                className="absolute left-[37%] bottom-[40%] bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2 disabled:cursor-not-allowed"
                onClick={() => handleOption("children", "d")}
                disabled={options.children <= 0}
              >
                -
              </button>
              <span className="absolute left-[58%] bottom-[46%]">{options.children}</span>
              <button
                className="absolute bottom-[40%] left-[70%] bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2"
                onClick={() => handleOption("children", "i")}
              >
                +
              </button>
            </div>
            <div className="items">
              <span className="absolute bottom-6 left-11">Room</span>
              <button
                className="absolute left-[37%] bottom-3 bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2 disabled:cursor-not-allowed"
                onClick={() => handleOption("room", "d")}
                disabled={options.room <= 1}
              >
                -
              </button>
              <span className="absolute left-[58%] bottom-6">{options.room}</span>
              <button
                className="absolute bottom-3 left-[70%] bg-black w-10 h-10 rounded-md text-lg border-yellow-400 border-2"
                onClick={() => handleOption("room", "i")}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
