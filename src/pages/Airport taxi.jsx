import React, { useState } from 'react';
import ButtonUsage from "../components/ui/Button.jsx";
import List from "../components/ui/List.jsx";
import FlightIcon from "@mui/icons-material/Flight";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckIcon from '@mui/icons-material/Check';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HailIcon from '@mui/icons-material/Hail';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ButtonGroup from "../components/ui/Buttongroup.jsx";
import TaxiCard from "../components/ui/Taxicard.jsx";

const Airport = () => {
  const [filter, setFilter] = useState('all');

  const taxiOptions = [
    {
      title: "Standard",
      description: "Skoda Octavia or similar",
      passengers: 3,
      bags: 2,
      meetGreet: "Meet & Greet included",
      cancellation: "Free cancellation"
    },
    {
      title: "Business",
      description: "Mercedes-Benz E-Class or similar",
      passengers: 3,
      bags: 2,
      meetGreet: "Meet & Greet included",
      cancellation: "Free cancellation"
    },
    {
      title: "People carrier",
      description: "Peugeot 5008 or similar",
      passengers: 5,
      bags: 5,
      meetGreet: "Meet & Greet included",
      cancellation: "Free cancellation"
    },
    {
      title: "Executive people carrier",
      description: "Mercedes-Benz V-Class or similar",
      passengers: 6,
      bags: 6,
      meetGreet: "Meet & Greet included",
      cancellation: "Free cancellation"
    },
    {
      title: "Large people carrier",
      description: "Ford Tourneo or similar",
      passengers: 7,
      bags: 7,
      meetGreet: "Meet & Greet included",
      cancellation: "Free cancellation"
    },
  ];

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTaxiOptions = taxiOptions.filter(option => {
    if (filter === 'all') return true;
    if (filter === '1-3' && option.passengers <= 3) return true;
    if (filter === '4-7' && option.passengers >= 4 && option.passengers <= 7) return true;
    return false;
  });

  return (
    <div className="relative">
      <div className="bg-red-900 p-1 h-[200px]">
        <h1 className="m-4 relative left-20 text-white font-bold">TravelEase</h1>
        <ButtonUsage />
        <List />
      </div>
      <div className="relative bg-[#F5F5F5] p-8">
        <h1 className="text-3xl font-bold relative left-16">Book your airport taxi</h1>
        <h2 className="text-[#808080] relative left-16">Easy airport transfers to and from your accommodation</h2>
        <ul className="flex justify-center gap-10 mt-4 relative left-7 top-44 h-56">
          <li className="flex items-start gap-2">
            <FlightIcon className="bg-[#F1FEF6] rounded-full p-2" style={{ fontSize: '3rem' }} />
            <div>
              <h2 className="font-bold">Flight tracking</h2>
              <h3 className="text-[#808080]">
                Your driver tracks your flight and waits for you if it's delayed
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <PaymentIcon className="bg-[#FEF3EC] rounded-full p-2" style={{ fontSize: '3rem' }} />
            <div>
              <h2 className="font-bold">One clear price</h2>
              <h3 className="text-[#808080]">
                Your price is confirmed upfront – no extra costs, no cash required
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckIcon className="bg-[#F1FEF6] rounded-full p-2" style={{ fontSize: '3rem' }} />
            <div>
              <h2 className="font-bold">Tried and trusted</h2>
              <h3 className="text-[#808080]">
                We work with professional drivers and have 24/7 customer care
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#FFFF] p-9 mt-10">
        <h1 className="font-bold text-center text-4xl">Airport transfers made easy</h1>
        <ul className="mt-4 space-y-16 p-24">
          <li className="flex items-start gap-5">
            <DirectionsCarIcon className="bg-[#CCE1FF] rounded-full text-blue-500 p-2" style={{ fontSize: '4rem', color:'blue' }} />
            <div>
              <h2 className="text-xl font-semibold">Booking your airport taxi</h2>
              <h3 className="text-[#808080] relative top-4">
                Confirmation is immediate. If your plans change,<br /> you can cancel for free up to 24 hours before your scheduled pick-up time.
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <HailIcon className="bg-[#CCE1FF] rounded-full text-blue-500 p-2" style={{ fontSize: '4rem',color:'blue' }} />
            <div>
              <h2 className="text-xl font-semibold">Meeting your driver</h2>
              <h3 className="text-[#808080] relative top-4">
                You'll be met on arrival and taken to your vehicle. <br /> Your driver will track your flight, so they'll wait for you even if it's delayed.
              </h3>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <ApartmentIcon className="bg-[#CCE1FF] rounded-full p-2 text-blue-500" style={{ fontSize: '4rem', color:'blue' }} />
            <div>
              <h2 className="text-xl font-semibold p-2">Arriving at your destination</h2>
              <h3 className="text-[#808080] relative top-4">
                Get to your destination quickly and safely – <br /> no waiting in line for a taxi, no figuring out public transport.
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[#F5F5F5] p-10 mt-7">
        <h2 className="font-bold text-center text-3xl">Airport taxis for any kind of trip</h2>
        <div className="mt-8 ml-4 ">
          <ButtonGroup onFilterChange={handleFilterChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {filteredTaxiOptions.map((option, index) => (
            <TaxiCard
              key={index}
              title={option.title}
              description={option.description}
              passengers={option.passengers}
              bags={option.bags}
              meetGreet={option.meetGreet}
              cancellation={option.cancellation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Airport;
