import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const LookAt = ({ initialPickupLocation, initialPickupDate, initialDropoffDate }) => {
  const [pickupLocation, setPickupLocation] = useState(initialPickupLocation);
  const [pickupDate, setPickupDate] = useState(initialPickupDate);
  const [dropoffDate, setDropoffDate] = useState(initialDropoffDate);
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [openPickupDate, setOpenPickupDate] = useState(false);
  const [openDropoffDate, setOpenDropoffDate] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search-results', {
      state: {
        pickupLocation,
        pickupDate,
        dropoffDate,
        pickupTime,
        dropoffTime
      }
    });
  };

  return (
    <div className="search flex flex-wrap gap-4 p-4 bg-white border-2 border-yellow-500 text-gray-400 rounded-lg">
      <div className="flex-1 flex items-center gap-2">
        <SearchIcon />
        <input
          type="text"
          placeholder="Pick-up Location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="outline-none flex-grow p-2"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 relative">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span
          onClick={() => setOpenPickupDate(!openPickupDate)}
          className="cursor-pointer"
        >
          {`${format(pickupDate[0].startDate, "MM/dd/yyyy")}`}
        </span>
        {openPickupDate && (
          <DateRange
            className="absolute top-12 z-50"
            editableDateInputs={true}
            onChange={(item) => setPickupDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={pickupDate}
            minDate={new Date()}
          />
        )}
      </div>
      <div className="flex-1 flex items-center gap-2">
        <FontAwesomeIcon icon={faClock} />
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="outline-none flex-grow p-2"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 relative">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span
          onClick={() => setOpenDropoffDate(!openDropoffDate)}
          className="cursor-pointer"
        >
          {`${format(dropoffDate[0].startDate, "MM/dd/yyyy")}`}
        </span>
        {openDropoffDate && (
          <DateRange
            className="absolute top-12 z-50"
            editableDateInputs={true}
            onChange={(item) => setDropoffDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dropoffDate}
            minDate={new Date()}
          />
        )}
      </div>
      <div className="flex-1 flex items-center gap-2">
        <FontAwesomeIcon icon={faClock} />
        <input
          type="time"
          value={dropoffTime}
          onChange={(e) => setDropoffTime(e.target.value)}
          className="outline-none flex-grow p-2"
        />
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

LookAt.propTypes = {
  initialPickupLocation: PropTypes.string,
  initialPickupDate: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      key: PropTypes.string
    })
  ),
  initialDropoffDate: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      key: PropTypes.string
    })
  )
};

LookAt.defaultProps = {
  initialPickupLocation: "",
  initialPickupDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  initialDropoffDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]
};

export default LookAt;
