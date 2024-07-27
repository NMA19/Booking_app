import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Items = ({ imageUrls, hotelName, location, description, price, stars }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="relative flex flex-col items-center justify-center w-full h-full rounded-xl bg-white shadow-md">
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {imageUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`Hotel ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="p-4">
          <h4 className="mb-2 text-xl font-semibold text-blue-gray-900">{hotelName}</h4>
          <h5 className="flex items-center text-gray-700">
            <LocationOnIcon style={{ fontSize: '1rem' }} />
            {location}
          </h5>
          <p className="mb-2 text-gray-700">{description}</p>
          <a href={`/room/${hotelName.toLowerCase().replace(/\s+/g, '-')}`}>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase text-pink-500 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg">
              Choose your room
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </a>
          <div className="flex items-center mt-2">
            {Array.from({ length: stars }).map((_, index) => (
              <svg key={index} className="w-5 h-5 text-yellow-700 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3">
            <h1 className="text-xl font-bold text-gray-700">${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
