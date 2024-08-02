import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Items = ({ imageUrls, hotelName, location, description, price, stars }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-4xl border rounded-lg shadow-md bg-white">
      {/* Image Carousel */}
      <div className="w-full sm:w-1/3 sm:h-auto overflow-hidden rounded-l-lg">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {imageUrls.map((url, index) => (
            <div key={index} className="w-full h-full flex items-center justify-center">
              <img src={url} alt={`Hotel ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
      
      {/* Hotel Details */}
      <div className="flex flex-col justify-around w-full px-4 sm:w-2/3">
        <h4 className="text-xl font-semibold text-gray-900">{hotelName}</h4>
        <h5 className="flex items-center text-gray-700 mt-1">
          <LocationOnIcon style={{ fontSize: '1rem' }} />
          <span className="ml-1">{location}</span>
        </h5>
        <p className="text-gray-700 mt-2">{description}</p>
        
        {/* Button and Price */}
        <div className="mt-4 flex flex-col">
          <a href={`/room/${hotelName.toLowerCase().replace(/\s+/g, '-')}`}>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase text-pink-500 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg">
              Choose your room
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </a>
          
          <div className="flex items-center mt-4">
            {Array.from({ length: stars }).map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          
          <h1 className="text-xl font-bold text-gray-700 mt-2">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Items;
