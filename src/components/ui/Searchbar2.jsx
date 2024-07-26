import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Search = ({ initialDestination, initialDate, initialOptions }) => {
  const [destination, setDestination] = useState(initialDestination);
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();  // Use the useNavigate hook

  const handleSearch = () => {
    // Handle search logic here
    navigate('/place', {
      state: {
        destination,
        date
      }
    });
  };

  return (
    <div className="search inline-flex gap-10 p-2 px-14 relative left-32 bottom-5 border-solid bg-white border-2 border-yellow-500 text-gray-400 rounded-lg">
      <div className="m-2 flex items-center gap-2">
        <FontAwesomeIcon icon={faBed} />
        <input
          style={{ marginLeft: '10px' }}
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="outline-none"
        />
      </div>
      <div className="m-2 flex items-center gap-2 relative">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span
          onClick={() => setOpenDate(!openDate)}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            className="absolute top-12 z-50"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
          />
        )}
      </div>
      <button
        onClick={handleSearch}
        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
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

Search.defaultProps = {
  initialDestination: "",
  initialDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  initialOptions: { adult: 1, children: 0, room: 1 }
};

export default Search;
