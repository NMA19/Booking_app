import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';

const Items = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="header flex justify-center p-4">
      <div className="headerList flex flex-wrap justify-center gap-4  rounded-lg text-white w-full max-w-4xl p-4 md:p-6 lg:p-8">
        <Link 
          className={`headerItem flex items-center p-3 ${currentPath === '/' ? 'bg-red-700 border-2 border-white rounded-full' : 'hover:bg-red-800'} rounded-lg`} 
          to="/"
        >
          <FontAwesomeIcon icon={faBed} />
          <span className="ml-2">Stays</span>
        </Link>
        <Link 
          className={`headerItem flex items-center p-3 ${currentPath === '/flight' ? 'bg-red-700 border-2 border-white rounded-full' : 'hover:bg-red-800'} rounded-lg`} 
          to="/flight"
        >
          <FontAwesomeIcon icon={faPlane} />
          <span className="ml-2">Flight</span>
        </Link>
        <Link 
          className={`headerItem flex items-center p-3 ${currentPath === '/car' ? 'bg-red-700 border-2 border-white rounded-full' : 'hover:bg-red-800'} rounded-lg`} 
          to="/car"
        >
          <FontAwesomeIcon icon={faCar} />
          <span className="ml-2">Car rental</span>
        </Link>
        <Link 
          className={`headerItem flex items-center p-3 ${currentPath === '/attraction' ? 'bg-red-700 border-2 border-white rounded-full' : 'hover:bg-red-800'} rounded-lg`} 
          to="/attraction"
        >
          <AttractionsRoundedIcon />
          <span className="ml-2">Attractions</span>
        </Link>
        <Link 
          className={`headerItem flex items-center p-3 ${currentPath === '/taxi' ? 'bg-red-700 border-2 border-white rounded-full' : 'hover:bg-red-800'} rounded-lg`} 
          to="/taxi"
        >
          <FontAwesomeIcon icon={faTaxi} />
          <span className="ml-2">Airport taxi</span>
        </Link>
      </div>
    </div>
  );
};

export default Items;
