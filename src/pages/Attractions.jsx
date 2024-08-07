import { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from "../components/ui/Countryfilter.jsx";
import Search from "../components/ui/Searchbar2.jsx";
import Header from '../components/ui/header.jsx';

const Att = () => {
  const [selectedRegion, setSelectedRegion] = useState('1');

  const firstDestinations = [
    { src: "./public/imag/anglesey br.jpg", region: "1" }, // Europe
    { src: "./public/imag/Helsinki.jpg", region: "1" }, // Europe
    { src: "./public/imag/takayama .jpg", region: "3" }, // Asia
    { src: "./public/imag/anglesey br.jpg", region: "1" }, // Europe
    { src: "./public/imag/Helsinki.jpg", region: "1" }, // Europe
    { src: "./public/imag/takayama .jpg", region: "3" }  // Asia
  ];

  const secondDestinations = [
    { src: "./public/imag/anglesey br.jpg", region: "1", place: "Anglesey, Wales", thingsToDo: "Explore beautiful beaches and historic sites" },
    { src: "./public/imag/Helsinki.jpg", region: "1", place: "Helsinki, Finland", thingsToDo: "Visit stunning architecture and museums" },
    { src: "./public/imag/takayama .jpg", region: "3", place: "Takayama, Japan", thingsToDo: "Experience traditional Japanese culture and markets" },
    // ... (other destinations)
  ];

  const filteredDestinations = secondDestinations.filter(destination => destination.region === selectedRegion);

  return (
    <div>
      <div className="bg-red-900">
        <Header 
          title={"Attractions, activities and experiences"} 
          text={"Discover new attractions and experiences to match your interests and travel style"}
        />
        <motion.div
          className='relative mx-10 top-16'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Search />
        </motion.div>
      </div>
      <motion.div
        className="bg-white mt-24 py-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-left lg:pl-12">Top destinations</h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {firstDestinations.map((destination, index) => (
            <motion.div
              key={index}
              className="w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <img
                className="w-full h-48 rounded-lg object-cover"
                src={destination.src}
                alt="Destination"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.h1
          className="mt-12 text-center font-bold lg:text-left lg:pl-12 sm:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          We've got you covered
        </motion.h1>
        <motion.ul
          className="grid justify-start gap-10 mt-8 sm:grid-cols-3 sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.li
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Explore top attractions</h2>
              <h3 className="text-[#808080]">
                Experience the best of your <br /> destination, with attractions,<br /> tours, activities, and more.
              </h3>
            </div>
          </motion.li>
          <motion.li
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Fast and flexible</h2>
              <h3 className="text-[#808080]">
                Book tickets online in minutes,<br /> with free cancellation on many <br /> attractions.
              </h3>
            </div>
          </motion.li>
          <motion.li
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Support when you need it</h2>
              <h3 className="text-[#808080]">
                Booking.com's global <br />Customer Service team is <br /> here to help 24/7.
              </h3>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
      <div className="mt-6">
        <h1 className="font-bold lg:text-left lg:pl-12 sm:text-2xl">Explore more destinations</h1>
        <h2 className="lg:text-left lg:pl-12">Find things to do in cities around the world</h2>
      </div>
      <Filter selectedOption={selectedRegion} onOptionChange={setSelectedRegion} />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        {filteredDestinations.map((destination, index) => (
          <motion.div
            key={index}
            className="w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
          >
            <img
              className="p-2 rounded-lg w-[90%] h-48 object-cover"
              src={destination.src}
              alt={destination.place}
            />
            <div className="text-center mt-2">
              <h3 className="font-semibold">{destination.place}</h3>
              <p className="text-sm text-gray-600">{destination.thingsToDo}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Att;
