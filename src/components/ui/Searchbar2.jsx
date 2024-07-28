import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';

const Search = ({ initialDestination, initialDate, initialOptions }) => {
  const [destination, setDestination] = useState(initialDestination);
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/place', {
      state: {
        destination,
        date
      }
    });
  };

  return (
    <div className="search flex flex-wrap gap-4 p-4 bg-white border-2 border-yellow-500 text-gray-400 rounded-lg">
      <div className="flex-1 flex items-center gap-2">
        <AttractionsRoundedIcon />
        <input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="outline-none flex-grow p-2"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 relative">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="cursor-pointer"
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
      <div className="flex-1 flex justify-center">
        <button
          onClick={handleSearch}
          className="rounded-lg bg-orange-500 py-3 px-6 font-bold text-white transition-all hover:shadow-lg focus:opacity-85 disabled:pointer-events-none disabled:opacity-50"
        >
          Search
        </button>
      </div>
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
