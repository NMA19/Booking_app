import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";

const Items = () => {
    return (
        <div className="header">
            <div className="headerListe m-2 absolute left-20 top-24 inline-flex text-white ">
                <div className="headerItem border-solid border-2 rounded-full p-3">
                    <FontAwesomeIcon icon={faBed} />
                    <span style={{ marginLeft: '10px' }}>Stays</span>
                </div>
                <div className="headerItem p-3" style={{ marginLeft: '30px' }}>
                    <FontAwesomeIcon icon={faPlane} />
                    <span style={{ marginLeft: '10px' }}>Flight</span>
                </div>
                <div className="headerItem p-3" style={{ marginLeft: '30px' }}>
                    <FontAwesomeIcon icon={faCar} />
                    <span style={{ marginLeft: '10px' }}>Car rental</span>
                </div>
                <div className="headerItem p-3" style={{ marginLeft: '30px' }}>
                    <FontAwesomeIcon icon={faBed} />
                    <span style={{ marginLeft: '10px' }}>Attractions</span>
                </div>
                <div className="headerItem p-3" style={{ marginLeft: '30px' }}>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span style={{ marginLeft: '10px' }}>Airport taxi</span>
                </div>
            </div>
        </div>
    );
};
export default Items;
