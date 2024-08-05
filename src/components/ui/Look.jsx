import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

// Sample images (replace with actual image paths or URLs)
const images = {
  'El Segundo': './imag/ZASCwKg9.jpeg ',
  'Phoenix': './imag/WKNvGK6D.jpeg',
  'Palma de Mallorca Airport': './imag/psTCC7LN.jpeg',
  'Orlando International Airport': '../imag/psTCC7LN.jpeg',
};

const LookAt = ({ initialPickupLocation, initialPickupDate, initialDropoffDate }) => {
  const [pickupLocation, setPickupLocation] = useState(initialPickupLocation);
  const [pickupDate, setPickupDate] = useState(initialPickupDate);
  const [dropoffDate, setDropoffDate] = useState(initialDropoffDate);
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
  const [openPickupDate, setOpenPickupDate] = useState(false);
  const [openDropoffDate, setOpenDropoffDate] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('City');
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
  ];

  const destinations = [
    {
      type: 'City',
      name: 'El Segundo',
      details: '105 car hire locations. Average price of DZD 7,843.21 per day.',
    },
    {
      type: 'City',
      name: 'Phoenix',
      details: '81 car hire locations. Average price of DZD 8,261.33 per day.',
    },
    {
      type: 'Airport',
      name: 'Palma de Mallorca Airport',
      details: '43 car hire locations. Average price of DZD 4,208.28 per day.',
    },
    {
      type: 'Airport',
      name: 'Orlando International Airport',
      details: '125 car hire locations. Average price of DZD 5,754.18 per day.',
    },
  ];

  const filteredDestinations = destinations.filter((destination) => destination.type === selectedFilter);

  return (
    <div>
      {/* Search Fields */}
      <motion.div
        className="search flex flex-wrap gap-4 p-4 bg-white border-2 border-yellow-500 text-gray-400 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex-1 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Pick-up Location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="outline-none flex-grow p-2"
          />
        </motion.div>

        {/* Pickup Date */}
        <motion.div
          className="flex-1 flex items-center gap-2 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Pickup Time */}
        <motion.div
          className="flex-1 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faClock} />
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="outline-none flex-grow p-2"
          />
        </motion.div>

        {/* Dropoff Date */}
        <motion.div
          className="flex-1 flex items-center gap-2 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
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
        </motion.div>

        {/* Dropoff Time */}
        <motion.div
          className="flex-1 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FontAwesomeIcon icon={faClock} />
          <input
            type="time"
            value={dropoffTime}
            onChange={(e) => setDropoffTime(e.target.value)}
            className="outline-none flex-grow p-2"
          />
        </motion.div>

        {/* Search Button */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <button
            onClick={handleSearch}
            className="rounded-lg bg-orange-500 py-3 px-6 font-bold text-white transition-all hover:shadow-lg focus:opacity-85 disabled:pointer-events-none disabled:opacity-50"
          >
            Search
          </button>
        </motion.div>
      </motion.div>

      {/* Destinations and FAQs */}
      <motion.div
  className="bg-[#F5F5F5]"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.2 }}
>
  <div className="grid gap-8 p-8"> {/* Removed sm:grid-cols-2 */}
    <div className="mb-8"> {/* Added margin-bottom */}
      <h2 className="font-bold text-black text-xl mb-4">Popular Destinations</h2>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 border-b-2 ${
            selectedFilter === 'City'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-black hover:text-orange-500'
          }`}
          onClick={() => setSelectedFilter('City')}
        >
          Cities Worldwide
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            selectedFilter === 'Airport'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-black hover:text-orange-500'
          }`}
          onClick={() => setSelectedFilter('Airport')}
        >
          Airports Worldwide
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {filteredDestinations.map((destination, index) => (
          <motion.li
            key={index}
            className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={images[destination.name] || images['default']}
              alt={destination.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <p className="font-semibold">{destination.name}</p>
              <p className="text-gray-600">{destination.details}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-black text-xl mb-4">Frequently Asked Questions</h2>
      <ul className="grid grid-col gap-4"> {/* Changed from grid to flex and removed grid-cols-1 */}
        {faqData.map((faq, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <FontAwesomeIcon
                icon={activeFAQ === index ? faChevronUp : faChevronDown}
              />
            </div>
            {activeFAQ === index && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
</motion.div>

    </div>
  );
};

LookAt.propTypes = {
  initialPickupLocation: PropTypes.string,
  initialPickupDate: PropTypes.array.isRequired,
  initialDropoffDate: PropTypes.array.isRequired,
};

LookAt.defaultProps = {
  initialPickupLocation: '',
  initialPickupDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
  initialDropoffDate: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
};

export default LookAt;
