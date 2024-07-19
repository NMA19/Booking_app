import List from "../components/ui/List";
import ButtonUsage from "../components/ui/Button";
import SearchBar from "../components/ui/searchbar"; // Ensure the correct path is used
import { useLocation } from 'react-router-dom';
import Items from "../components/Hotelitem/Item";

const hotels = [
  {
    imageUrls: [
      "/imag/The Manhattan At Times Square 4 star New York.jpeg",
      "https://images.unsplash.com/photo-1553747531-e77e33d28628?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd62?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
    ],
    hotelName: "Manhattan",
    location: "New York",
    description: "Like so many organizations these days, Autodesk is a company in",
    price: 2190,
    stars: 4
  },
  {
    imageUrls: [
      "/imag/Home - Hôtel États-Unis Opéra.jpeg",
      "https://images.unsplash.com/photo-1560264418-6c9a49de3a56?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
    ],
    hotelName: "États-Unis Opéra",
    location: "Paris",
    description: "A wonderful place to enjoy your vacation with family and friends.",
    price: 3000,
    stars: 5
  },
  // Add more hotel objects as needed
];


const Result = () => {  
  const location = useLocation();
  const { destination, date, options } = location.state || {};

 
  return (
    <section>
      <div className="bg-[#1e3a8a] p-1 h-[250px]">
        <h1 className="m-4 relative left-20 text-white font-bold">
          BroBooking-app
        </h1>
        <ButtonUsage />
        <List />
      </div>
      <SearchBar 
        initialDestination={destination}
        initialDate={date}
        initialOptions={options}
      />
      <div className="flex justify-center">
        <div>List menu</div> 
        <div className="flex flex-wrap justify-center gap-6">
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