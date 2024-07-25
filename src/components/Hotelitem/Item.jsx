import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Items = ({ imageUrls, hotelName, location, description, price, stars }) => {
  return (
    <div className="h-1/4 my-1 items-center justify-center">
      <div className="relative top-[15%] left-[28%] flex w-full max-w-[48rem] h-[250px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {imageUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`Hotel ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="p-6 ">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {hotelName}
          </h4>
          <h5 className="flex items-center">
            <LocationOnIcon style={{ fontSize: '1rem' }} />
            {location}
          </h5>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <a className="inline-block relative bottom-[9%]" href={`/room/${hotelName.toLowerCase().replace(/\s+/g, '-')}`}>
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Choose your room
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
          <div className="flex relative bottom-[78%] left-32 items-center mt-2">
            {Array.from({ length: stars }).map((_, index) => (
              <svg key={index} className="w-5 h-5 fill-current text-yellow-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3 relative left-[86%] bottom-[45%]">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
          </div>
        </div>
      </div>
      {/* stylesheet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
    </div>
  );
};

export default Items;
