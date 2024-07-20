import { useLocation } from "react-router-dom";
import SearchBar from "../components/ui/searchbar";

const RoomDetail = () => {
  const location = useLocation();
  const { destination, date, options } = location.state || {};

  return (
    <div>
      <SearchBar 
        initialDestination={destination}
        initialDate={date}
        initialOptions={options}
      />
      <h2>Room Details</h2>
      {/* Add the room details here */}
    </div>
  );
};

export default RoomDetail;
