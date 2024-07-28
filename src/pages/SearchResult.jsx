import List from "../components/ui/List";
import ButtonUsage from "../components/ui/Button";
import SearchBar from "../components/ui/searchbar";
import Items from "../components/Hotelitem/Item";
import { useLocation } from 'react-router-dom';
import Map from "../components/Map";
import { useEffect, useState } from 'react';

const hotels = [
  {
    imageUrls: [
      "/imag/The Manhattan At Times Square 4 star New York.jpeg",
      "https://images.unsplash.com/photo-1553747531-e77e33d28628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    hotelName: "Manhattan",
    location: "New York",
    description: "Like so many organizations these days, Autodesk is a company in",
    price: 2190,
    stars: 4,
    latitude: 40.7590,
    longitude: -73.9845,
  },
  {
    imageUrls: [
      "/imag/Home - Hôtel États-Unis Opéra.jpeg",
      "https://images.unsplash.com/photo-1560264418-6c9a49de3a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    hotelName: "États-Unis Opéra",
    location: "Paris",
    description: "A wonderful place to enjoy your vacation with family and friends.",
    price: 3000,
    stars: 4,
    latitude: 48.8718,
    longitude: 2.3318,
  },
  // Add more hotel objects as needed
];

const fetchCoordinates = async (address) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
  const data = await response.json();
  if (data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    };
  }
  return null;
};

const Result = () => {
  const location = useLocation();
  const { destination, date, options } = location.state || {};
  const [coordinates, setCoordinates] = useState(null);
  const sampleHotel = hotels[0]; // For demonstration purposes, using the first hotel.

  useEffect(() => {
    const getCoordinates = async () => {
      const coords = await fetchCoordinates(sampleHotel.location);
      setCoordinates(coords);
    };
    getCoordinates();
  }, [sampleHotel.location]);

  return (
    <section>
      <div className="bg-red-900 p-1 h-[250px]">
        <h1 className="m-4 relative left-20 text-white font-bold">
          TravelEase
        </h1>
        <ButtonUsage />
        <List />
      </div>
      <SearchBar 
        initialDestination={destination}
        initialDate={date}
        initialOptions={options}
      />
      <div className="flex flex-col md:flex-row justify-center gap-5 py-6 px-10">
        <div className="w-full md:w-1/3">
          {coordinates && <Map lat={coordinates.lat} lng={coordinates.lng} />}
        </div>
        <div className="w-full md:w-2/3  flex flex-col gap-5">
          {hotels.map((hotel, index) => (
            <Items
              key={index}
              imageUrls={hotel.imageUrls}
              hotelName={hotel.hotelName}
              location={hotel.location}
              description={hotel.description}
              price={hotel.price}
              stars={hotel.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
