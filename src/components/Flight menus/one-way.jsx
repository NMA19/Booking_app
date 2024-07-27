import  { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import './searchMenu.css'

const OneWay = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName);
      };
    
      // ------------------------------------ Date --------------------------------------------
      const [openDate, setOpenDate] = useState(false);  
      const [dateSelected, setDateSelected] = useState(false);
      const [date, setDate] = useState(new Date());
      const handleDateChange = (date) => {
        setDate(date);
        setDateSelected(true);
      };
    
          // Affichage de date
      const displayText = dateSelected 
        ? `${format(date, "MM/dd/yyyy")}`
        : "Departing";
    
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
  return (
    <form>
          <div className='row'>
            <label className={`${focusedInput === 'departure' ? 'focus-within' : ''}`}>
              <FontAwesomeIcon icon={faSearch} style={{color: '#f97316'}}/>
              <input
                type="text"
                className="input"
                placeholder="Departing from?"
                autoComplete="on"
                onFocus={() => handleInputFocus('departure')}
              />
            </label>
            <label className={`${focusedInput === 'destination' ? 'focus-within' : ''}`}>
              <FontAwesomeIcon icon={faSearch} style={{color: '#f97316'}}/>
              <input
                type="text"
                className="input"
                placeholder="Going to?"
                autoComplete="off"
                onFocus={() => handleInputFocus('destination')}
              />
            </label>
          </div>
          <div className='row'>
            <label>
              <FontAwesomeIcon icon={faCalendarDays} style={{color: '#f97316'}}/>
              <span onClick={() => setOpenDate(!openDate)} style={{color: "#7f1d1d"}}>
                {displayText}
              </span>
              {openDate && (
                <div className= "absolute top-[88%]" ref={dateRangeRef} onBlur={handleBlur} tabIndex="0">
                  <Calendar 
                    className="absolute rounded-xl border-red-900 border-2"
                    onChange={handleDateChange}
                    minDate={new Date()}
                  />
                </div>
              )}
            </label>
            <label>
              <FontAwesomeIcon icon={faUser} style={{color: '#f97316'}}/>
              <span onClick={() => setOpenOptions(!openOptions)}>
                {displayOptions}
              </span>
              {openOptions && (
                <div className="absolute top-[87%] bg-white rounded-xl inline-block border-red-900 border-2 w-72 h-[25%]"  ref={optionRef}>
                  <div className="items">
                    <span className="absolute top-[17%] left-6">Adult</span>
                    <button
                      type="button"
                      className="absolute left-[37%] top-4 text-red-900 bg-white w-10 h-10 rounded-md border-red-900 border-2 disabled:cursor-not-allowed"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className="absolute left-[58%] top-[17%]">{options.adult}</span>
                    <button
                      type="button"
                      className="absolute left-[70%] top-4 text-red-900 bg-white w-10 h-10 rounded-md border-red-900 border-2"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                  <div className="items">
                    <span className="absolute top-[60%] left-6">Children</span>
                    <button
                      type="button"
                      className="absolute left-[37%] top-[55%] text-red-900 bg-white w-10 h-10 rounded-md border-red-900 border-2 disabled:cursor-not-allowed"
                      onClick={() => handleOption("children", "d")}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className="absolute left-[58%] top-[60%]">{options.children}</span>
                    <button
                      type="button"
                      className="absolute top-[55%] left-[70%] text-red-900 bg-white w-10 h-10 rounded-md border-red-900 border-2"
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

export default OneWay;