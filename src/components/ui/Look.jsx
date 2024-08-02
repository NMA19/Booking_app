import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search-results', {
      state: {
        pickupLocation,
        pickupDate,
        dropoffDate,
        pickupTime,
        dropoffTime,
      },
    });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: 'Why should I book a car rental in Algeria with TravelEase?',
      answer: `
        We make it easy to find a rental that’ll fit your needs. Here’s what we offer:
        - Huge selection of cars – from compact vehicles to SUVs
        - Support in 30+ languages
        - Free cancellation up to 48 hours before pick-up time on most bookings
      `,
    },
    {
      question: 'What documents do I need to rent a car?',
      answer: `
        You typically need a valid driver's license, a credit card in the renter's name, and sometimes an additional form of ID like a passport.
      `,
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: `
        Yes, you can modify or cancel your reservation. Many bookings offer free cancellation up to 48 hours before pick-up time.
      `,
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: `
        Yes, you can modify or cancel your reservation. Many bookings offer free cancellation up to 48 hours before pick-up time.
      `,
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: `
        Yes, you can modify or cancel your reservation. Many bookings offer free cancellation up to 48 hours before pick-up time.
      `,
    },
    {
      question: 'Can I modify or cancel my reservation?',
      answer: `
        Yes, you can modify or cancel your reservation. Many bookings offer free cancellation up to 48 hours before pick-up time.
      `,
    },
  ];

  return (
    <div className="search flex flex-wrap gap-4 p-4 bg-white text-gray-400 rounded-lg">
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
          {`${format(pickupDate[0].startDate, 'MM/dd/yyyy')}`}
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
          {`${format(dropoffDate[0].startDate, 'MM/dd/yyyy')}`}
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

      <div className='bg-[#F5F5F5]'>
        <ul className="grid justify-start gap-48 mt-8 sm:grid-cols-3 sm:text-xl p- rounded-md">
          <li className="flex items-start gap-2">
            <div className="p-4 rounded-md">
              <h2 className="font-bold text-black">We’re here for you</h2>
              <h3 className="text-gray-600">
              Customer support in over 30 languages
              </h3>
            </div> 
          </li>
          <li className="flex items-start gap-2">
            <div className="p-4 rounded-md">
              <h2 className="font-bold text-black">Free cancellation</h2>
              <h3 className="text-gray-600">
              Up to 48 hours before pick-up, on most bookings
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="p-4 rounded-md">
              <h2 className="font-bold text-black">6 million+ reviews</h2>
              <h3 className="text-gray-600">
              By real, verified customers
              </h3>
            </div>
          </li>
        </ul>
      </div>

      <h1 className='text-black text-2xl font-bold p-2'>Frequently asked questions</h1>
      <div className="text-black p-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
  {faqData.map((item, index) => (
    <div key={index} className="mb-7">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <h3 className="font-bold text-lg flex-grow">{item.question}</h3>
        <FontAwesomeIcon icon={activeFAQ === index ? faChevronUp : faChevronDown} className="ml-2" />
      </div>
      {activeFAQ === index && (
        <p className="text-gray-600 mt-2">{item.answer}</p>
      )}
    </div>
  ))}
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
      key: PropTypes.string,
    })
  ),
  initialDropoffDate: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      key: PropTypes.string,
    })
  ),
};

LookAt.defaultProps = {
  initialPickupLocation: '',
  initialPickupDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  initialDropoffDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
};

export default LookAt;
