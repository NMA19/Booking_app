import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';
import './List.css';

const Items = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="header">
            <div className="headerListe m-2 absolute left-20 top-24 inline-flex text-white">
                <Link 
                    className={`headerItem p-3 ${currentPath === '/' ? 'active' : ''}`} 
                    to="/"
                >
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span style={{ marginLeft: '10px' }}>Stays</span>
                    </div>
                </Link>
                <Link 
                    className={`headerItem p-3 ${currentPath === '/flight' ? 'active' : ''}`} 
                    to="/flight"
                >
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span style={{ marginLeft: '10px' }}>Flight</span>
                    </div>
                </Link>
                <Link 
                    className={`headerItem p-3 ${currentPath === '/car' ? 'active' : ''}`} 
                    to="/car"
                >
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span style={{ marginLeft: '10px' }}>Car rental</span>
                    </div>
                </Link>
                <Link 
                    className={`headerItem p-3 ${currentPath === '/attraction' ? 'active' : ''}`} 
                    to="/attraction"
                >
                    <div className="headerItem">
                        <AttractionsRoundedIcon  />
                        <span style={{ marginLeft: '10px' }}>Attractions</span>
                    </div>
                </Link>
                <Link 
                    className={`headerItem p-3 ${currentPath === '/taxi' ? 'active' : ''}`} 
                    to="/taxi"
                >
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span style={{ marginLeft: '10px' }}>Airport taxi</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Items;
