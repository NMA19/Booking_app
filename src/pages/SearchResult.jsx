import { useLocation } from "react-router-dom";
import { useState } from "react";
import ButtonUsage from "../components/ui/Button";
import Items from "../components/ui/List";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file 

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || '');
  const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });

  return (
    <div className="bg-[#1e3a8a] p-1 h-[200px]">
      <h1 className="m-4 relative left-20 text-white font-bold">
        BroBooking-app
      </h1>
      <ButtonUsage />
      <Items />
      <div className="absolute top-[250px] left-[150px] bg-amber-500 rounded-md p-2">
        <div className="search">
          <h1 className="text-4xl p-2">Search</h1>
          <div className="p-2">
            <label>Destination</label><br />
            <input
              className="p-3"
              value={destination}
              type="text"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label>Check-in date</label><br /><br />
            <span className="bg-white p-3" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            <br /><br />
            {openDate && (
              <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="p-2">
            <label>Options</label>
            <div>
              <span className="p-2">Min price <small>per night</small></span>
              <input type="number" className="p-2 left-7" />
            </div>
            <div>
              <span className="p-2">Max price <small>per night</small></span>
              <input type="number" className="p-2 relative top-2" />
            </div>
            <div>
              <span className="p-2">Adult</span>
              <input type="number" className="p-2 relative top-3 left-[87px]" min={1} placeholder={options.adult} />
            </div>
            <div>
              <span className="p-2">Children</span>
              <input type="number" className="p-2 relative top-4 left-[65px]" min={0} placeholder={options.children} />
            </div>
            <div>
              <span className="p-2">Room</span>
              <input type="number" className="p-2 relative top-5 left-[81px]" min={1} placeholder={options.room} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
