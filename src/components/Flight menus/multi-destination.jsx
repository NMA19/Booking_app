import  { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarDays, faUser, faClose } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import './searchMenu.css'

const MultiDestination = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName);
      };
    
      // ------------------------------------ Date --------------------------------------------
      const [openDate, setOpenDate] = useState(false);  
      
      // const handleDateChange = (date) => {
      //   setDate(date);
      //   setDateSelected(true);
      // };
    
          // Affichage de date
   
    
          // Hide calendar when you click elsewhere
      const dateRangeRef = useRef(null);
      const handleBlur = (event) => {
        if (dateRangeRef.current && !dateRangeRef.current.contains(event.relatedTarget)) {
          setOpenDate(false);
        }
      };
      
    
      // ----------------------------------- Adult/children Options --------------------------------------
      const [openOptions, setOpenOptions] = useState(false); 
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
      });
    
      const displayOptions = options.children === 0? `${options.adult} Adult`: `${options.adult} Adult . ${options.children} children`;
    
          // +/- Buttons
      const handleOption = (name, operation) => {
        setOptions((prev) => ({
          ...prev,
          [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1
        }));
      };
        // Hide options when you click elsewhere
      const optionRef = useRef(null);
      useEffect(() => {
        const handleClickOutside = (event) => {
    
          if (optionRef.current && !optionRef.current.contains(event.target)) {
            setOpenOptions(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    
      // ------------------------------ Economy menu --------------------------
      const [selectedOption, setSelectedOption] = useState('');
    
      const classOptions = [
        { value: 'economy', label: 'Economy' },
        { value: 'business', label: 'Business' },
        { value: 'first', label: 'First Class' },
      ];
    
      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };




    const [flights, setFlights] = useState([
        { departure: '', destination: '', date: new Date() }
    ]);

    const handleInputChange = (index, field, value) => {
        const newFlights = [...flights];
        newFlights[index][field] = value;
        setFlights(newFlights);
    };

    const handleDateChange = (index, date) => {
        const newFlights = [...flights];
        newFlights[index].date = date;
        setFlights(newFlights);
    };

    const addFlight = (e) => {
      e.preventDefault(); // Prevent the default form submission
      setFlights([...flights, { departure: '', destination: '', date: new Date() }]);
  };
    const deleteFlight = (DeletedIndex) => {
      setFlights(flights.filter((_, index) => index !== DeletedIndex))
    }
  return (
    <form>
          {flights.map((flight, index) => (
                <div className='row' key={index}>
                    <label className={`${focusedInput === `departure-${index}` ? 'focus-within' : ''}`}>
                        <FontAwesomeIcon icon={faSearch} style={{color: '#345bc6'}}/>
                        <input
                            type="text"
                            className="input"
                            placeholder="Departing from?"
                            autoComplete="on"
                            value={flight.departure}
                            onChange={(e) => handleInputChange(index, 'departure', e.target.value)}
                            onFocus={() => handleInputFocus(`departure-${index}`)}
                        />
                    </label>
                    <label className={`${focusedInput === `destination-${index}` ? 'focus-within' : ''}`}>
                        <FontAwesomeIcon icon={faSearch} style={{color: '#345bc6'}}/>
                        <input
                            type="text"
                            className="input"
                            placeholder="Going to?"
                            autoComplete="off"
                            value={flight.destination}
                            onChange={(e) => handleInputChange(index, 'destination', e.target.value)}
                            onFocus={() => handleInputFocus(`destination-${index}`)}
                        />
                    </label>
                    {index > 0
                        ?<div className='dateDiv'>
                          <label className='w-4/5'>
                            <FontAwesomeIcon icon={faCalendarDays} style={{color: '#345bc6'}}/>
                            <span onClick={() => setOpenDate(index)} style={{color: "#1e3a8a"}}>
                                {format(flight.date, "MM/dd/yyyy")}
                            </span>
                            {openDate === index && (
                                <div className=" " ref={dateRangeRef} onBlur={handleBlur} tabIndex="0">
                                    <Calendar 
                                        className="absolute rounded-xl border-[#345bc6] border-2"
                                        onChange={(date) => handleDateChange(index, date)}
                                        minDate={new Date()}
                                    />
                                </div>
                            )}
                          </label>
                          <div className='w-1/5 inline-flex justify-center items-center'>
                              <FontAwesomeIcon icon={faClose} className='closeIcon' onClick={()=> deleteFlight(index)}/>
                          </div>
                        </div>
                        :<label>
                          <FontAwesomeIcon icon={faCalendarDays} style={{color: '#345bc6'}}/>
                          <span onClick={() => setOpenDate(index)} style={{color: "#1e3a8a"}}>
                              {format(flight.date, "MM/dd/yyyy")}
                          </span>
                          {openDate === index && (
                              <div className="top-[77%]" ref={dateRangeRef} onBlur={handleBlur} tabIndex="0">
                                  <Calendar 
                                      className="absolute rounded-xl border-[#345bc6] border-2"
                                      onChange={(date) => handleDateChange(index, date)}
                                      minDate={new Date()}
                                  />
                              </div>
                          )}
                        </label>
                      }
                </div>
            ))}
            <button
                type="button" // Change this from default 'submit' to 'button'
                className="rounded-full bg-white mb-3 py-2 px-[3%] font-bold text-blue-500 border-solid border-2 border-blue-500 transition-all hover:border-[#1e3a8a] hover:text-[#1e3a8a] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={addFlight}
            >
                + Add another flight
            </button>
            {/* <button onClick={handleClick}>+ Add another flight</button> */}
          <div className='row'>
            <label>
              <FontAwesomeIcon icon={faUser} style={{color: '#345bc6'}}/>
              <span onClick={() => setOpenOptions(!openOptions)}>
                {displayOptions}
              </span>
              {openOptions && (
                <div className="absolute top-[98%] bg-white rounded-xl inline-block border-[#345bc6] border-2 w-72 h-[25%]"  ref={optionRef}>
                  <div className="items">
                    <span className="absolute top-[17%] left-6">Adult</span>
                    <button
                      type="button"
                      className="absolute left-[37%] top-4 text-[#345bc6] bg-white w-10 h-10 rounded-md border-[#345bc6] border-2 disabled:cursor-not-allowed"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="absolute left-[58%] top-[17%]">{options.adult}</span>
                    <button
                      type="button"
                      className="absolute left-[70%] top-4 text-[#345bc6] bg-white w-10 h-10 rounded-md border-[#345bc6] border-2"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                  <div className="items">
                    <span className="absolute top-[60%] left-6">Children</span>
                    <button
                      type="button"
                      className="absolute left-[37%] top-[55%] text-[#345bc6] bg-white w-10 h-10 rounded-md border-[#345bc6] border-2 disabled:cursor-not-allowed"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="absolute left-[58%] top-[60%]">{options.children}</span>
                    <button
                      type="button"
                      className="absolute top-[55%] left-[70%] text-[#345bc6] bg-white w-10 h-10 rounded-md border-[#345bc6] border-2"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </label>
            <label className={`${focusedInput === 'class' ? 'focus-within' : ''}`}>
              <select 
                value={selectedOption} 
                onChange={handleSelectChange}
                className="input"
              >
                {classOptions.map((classOptions) => (
                  <option key={classOptions.value} value={classOptions.value}>
                    {classOptions.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </form>
  )
}

export default MultiDestination;