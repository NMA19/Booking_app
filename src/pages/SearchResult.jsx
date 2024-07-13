import List from "../components/ui/List";
import ButtonUsage from "../components/ui/Button";
import SearchBar from "../components/ui/searchbar"; // Ensure the correct path is used
import { useLocation } from 'react-router-dom';
import Items from "../components/Hotelitem/Item";

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
      {/* <Items /> */}
        <div className="">
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
      </div>
    </section>
  );
};

export default Result;
