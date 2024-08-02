import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file 
import { DateRange } from 'react-date-range';
import { useState, useRef, useEffect } from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const SearchBar = ({ initialDestination, initialDate, initialOptions }) => {
  const [destination, setDestination] = useState(initialDestination);  
  const [openDate, setOpenDate] = useState(false);  
  const [date, setDate] = useState(initialDate);
  const [openOptions, setOpenOptions] = useState(false); 
  const [options, setOptions] = useState(initialOptions);
  const dateRef = useRef(null);
  const optionsRef = useRef(null);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1
    }));
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search", { state: { destination, date, options } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search flex flex-col justify-center mx-10 sm:flex-row gap-4 p-4 bg-white border-2 border-yellow-500 text-gray-400 rounded-lg">
      <div className="flex items-center m-2">
        <FontAwesomeIcon icon={faBed} />
        <input 
          className="ml-2 w-full"
          type="text" 
          placeholder="Where are you going?" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="flex items-center m-2 relative" ref={dateRef}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span className="ml-2 cursor-pointer" onClick={() => setOpenDate(!openDate)}>
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            className="absolute z-10 border-solid border-2 border-red-900 rounded"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </div>
      <div className="flex items-center m-2 relative" ref={optionsRef}>
        <FontAwesomeIcon icon={faPerson} />
        <span className="ml-2 cursor-pointer" onClick={() => setOpenOptions(!openOptions)}>
          {`${options.adult} adult . ${options.children} children . ${options.room} rooms`}
        </span>
        {openOptions && (
          <div className="absolute z-10 mt-2 bg-white text-red-900 rounded-xl border-2 border-red-900 p-4 w-64">
            <div className="flex justify-between items-center mb-2">
              <span>Adult</span>
              <div className="flex items-center">
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900 disabled:cursor-not-allowed"
                  onClick={() => handleOption("adult", "d")}
                  disabled={options.adult <= 1}
                >
                  -
                </button>
                <span className="mx-2">{options.adult}</span>
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Children</span>
              <div className="flex items-center">
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900 disabled:cursor-not-allowed"
                  onClick={() => handleOption("children", "d")}
                  disabled={options.children <= 0}
                >
                  -
                </button>
                <span className="mx-2">{options.children}</span>
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Room</span>
              <div className="flex items-center">
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900 disabled:cursor-not-allowed"
                  onClick={() => handleOption("room", "d")}
                  disabled={options.room <= 1}
                >
                  -
                </button>
                <span className="mx-2">{options.room}</span>
                <button
                  className="bg-white w-8 h-8 rounded-md text-lg border-2 border-red-900"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="rounded-lg bg-orange-500 py-2 px-4 font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:opacity-50"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  initialDestination: PropTypes.string,
  initialDate: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      key: PropTypes.string
    })
  ),
  initialOptions: PropTypes.shape({
    adult: PropTypes.number,
    children: PropTypes.number,
    room: PropTypes.number
  })
};

SearchBar.defaultProps = {
  initialDestination: "",
  initialDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  initialOptions: { adult: 1, children: 0, room: 1 }
};

export default SearchBar;
