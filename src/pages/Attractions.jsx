import { useState } from 'react';
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
    { src: "./public/imag/anglesey br.jpg", region: "1", place: "Anglesey, Wales", thingsToDo: "Explore beautiful beaches and historic sites" },
    { src: "./public/imag/Helsinki.jpg", region: "1", place: "Helsinki, Finland", thingsToDo: "Visit stunning architecture and museums" },
    { src: "./public/imag/takayama .jpg", region: "3", place: "Takayama, Japan", thingsToDo: "Experience traditional Japanese culture and markets" },
    { src: "./public/imag/anglesey br.jpg", region: "1", place: "Anglesey, Wales", thingsToDo: "Explore beautiful beaches and historic sites" },
    { src: "./public/imag/Helsinki.jpg", region: "1", place: "Helsinki, Finland", thingsToDo: "Visit stunning architecture and museums" },
    { src: "./public/imag/takayama .jpg", region: "3", place: "Takayama, Japan", thingsToDo: "Experience traditional Japanese culture and markets" },
    { src: "./public/imag/anglesey br.jpg", region: "1", place: "Anglesey, Wales", thingsToDo: "Explore beautiful beaches and historic sites" },
    { src: "./public/imag/Helsinki.jpg", region: "1", place: "Helsinki, Finland", thingsToDo: "Visit stunning architecture and museums" },
    { src: "./public/imag/takayama .jpg", region: "3", place: "Takayama, Japan", thingsToDo: "Experience traditional Japanese culture and markets" }
  ];

  const filteredDestinations = secondDestinations.filter(destination => destination.region === selectedRegion);

  return (
    <div>
      <div className="bg-red-900">
        <Header 
          title={"Attractions, activities and experiences"} 
          text={"Discover new attractions and experiences to match your interests and travel style"}
        />
        <div className='relative mx-10 top-16'>
          <Search />
        </div>
      </div>
      <div className="bg-white mt-24 py-8 px-4">
        <h1 className="font-bold text-xl text-center sm:text-2xl lg:text-left lg:pl-12">Top destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-8">
          {firstDestinations.map((destination, index) => (
            <div key={index} className="w-full max-w-sm">
              <img
                className="w-full h-48 rounded-lg object-cover"
                src={destination.src}
                alt="Destination"
              />
            </div>
          ))}
        </div>
        <h1 className="mt-12 text-center font-bold lg:text-left lg:pl-12 sm:text-2xl">We've got you covered</h1>
        <ul className="grid justify-start gap-10 mt-8 sm:grid-cols-3 sm:text-xl">
          <li className="flex items-start gap-2">
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Explore top attractions</h2>
              <h3 className="text-[#808080]">
                Experience the best of your <br /> destination, with attractions,<br /> tours, activities, and more.
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Fast and flexible</h2>
              <h3 className="text-[#808080]">
                Book tickets online in minutes,<br /> with free cancellation on many <br /> attractions.
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="border-2 p-4 rounded-md">
              <h2 className="font-bold">Support when you need it</h2>
              <h3 className="text-[#808080]">
                Booking.com's global <br />Customer Service team is <br /> here to help 24/7.
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h1 className="font-bold lg:text-left lg:pl-12 sm:text-2xl">Explore more destinations</h1>
        <h2 className="lg:text-left lg:pl-12">Find things to do in cities around the world</h2>
      </div>
      <Filter selectedOption={selectedRegion} onOptionChange={setSelectedRegion} />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center mt-8">
        {filteredDestinations.map((destination, index) => (
          <div key={index} className="w-full max-w-sm">
            <img
              className="p-2 rounded-lg w-[90%] h-48 object-cover"
              src={destination.src}
              alt={destination.place}
            />
            <div className="text-center mt-2">
              <h3 className="font-semibold">{destination.place}</h3>
              <p className="text-sm text-gray-600">{destination.thingsToDo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Att;
