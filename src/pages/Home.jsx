import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/ui/searchbar.jsx";
import HotelCard from "../components/ui/card.jsx";
import Subscribe from "./subsecribe.jsx";
import Header from "../components/ui/header.jsx";

const GridItem = ({ src, title, count, delay }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`p-2 pb-4 rounded-lg shadow-lg transition-all duration-700`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: `opacity 700ms, transform 700ms ${delay}ms`
      }}
    >
      <img className="w-full h-[155px] rounded-lg" src={src} alt={title} />
      <div className="ml-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-xl text-slate-500">{count} hotels</h2>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <section>
      <Header
        title={" A Lifetime of discounts? It's Genius."}
        text={"Get rewarded for your travels - unlock instant savings of 10% or more with a free TravelEase account."}
      />
      <SearchBar />
      <div className="mt-0 grid grid-cols-1 auto-rows-60 md:grid-cols-3 gap-4 p-4 px-10">
        <div className="relative group">
          <img
            className="w-full object-cover h-60 rounded-lg transition-transform transform group-hover:-translate-y-2"
            src="./public/imag/anglesey br.jpg"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg transition-transform transform group-hover:-translate-y-2">
            <h1 className="text-3xl font-bold text-white ">Anglesey</h1>
            <h2 className="text-xl font-semibold text-white">260 properties</h2>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full object-cover h-60 rounded-lg transition-transform transform group-hover:-translate-y-2"
            src="./public/imag/Helsinki.jpg"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg transition-transform transform group-hover:-translate-y-2">
            <h1 className="text-3xl font-bold text-white ">Helsinki</h1>
            <h2 className="text-xl font-semibold text-white">400 properties</h2>
          </div>
        </div>
        <div className="relative group">
          <img
            className="w-full object-cover h-60 rounded-lg transition-transform transform group-hover:-translate-y-2"
            src="./public/imag/takayama .jpg"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg transition-transform transform group-hover:-translate-y-2">
            <h1 className="text-3xl font-bold text-white ">Kyoto</h1>
            <h2 className="text-xl font-semibold text-white">180 properties</h2>
          </div>
        </div>
      </div>

      <h1 className="font-extrabold text-2xl text-center md:text-left md:px-10">
        Browse by property type
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4 md:px-10 text-center md:text-left">
        <GridItem src="./public/imag/hotel.jpg" title="Hotels" count="2500" delay={0} />
        <GridItem src="./public/imag/apartement.jpg" title="Apartments" count="4020" delay={200} />
        <GridItem src="./public/imag/resort.jpeg" title="Resorts" count="4020" delay={400} />
        <GridItem src="./public/imag/villa.jpg" title="Villas" count="1000" delay={600} />
        <GridItem src="./public/imag/cabin.jpg" title="Cabins" count="1820" delay={800} />
      </div>

      <h1 className="font-extrabold text-2xl text-center md:text-left md:px-10">
        Homes guests love
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 md:px-10 text-center md:text-left">
        <HotelCard source={"./public/imag/im.jpg"} />
        <HotelCard source={"./public/imag/im2.jpeg"} />
        <HotelCard source={"./public/imag/im3.jpg"} />
        <HotelCard source={"./public/imag/im4.jpg"} />
      </div>
      <Subscribe />
      <section className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="relative">
            <ul className="bg-white rounded-lg shadow-lg">
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Countries
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Regions
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Cities
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                District
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Airports
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Help
              </li>
            </ul>
          </div>

          <div className="relative">
            <ul className="bg-white rounded-lg shadow-lg">
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Homes
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Apartments
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Resorts
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Villas
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Hostels
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Guest houses
              </li>
            </ul>
          </div>

          <div className="relative">
            <ul className="bg-white rounded-lg shadow-lg">
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Unique places to stay
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                All destinations
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Discover
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Reviews
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Unpacked: Travel articles
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Travel communities
              </li>
            </ul>
          </div>

          <div className="relative">
            <ul className="bg-white rounded-lg shadow-lg">
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Car hire
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Flight finder
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Restaurant reservations
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Travel Agents
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Seasonal and holiday deals
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Packs
              </li>
            </ul>
          </div>

          <div className="relative">
            <ul className="bg-white rounded-lg shadow-lg">
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Countries
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Regions
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Cities
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                District
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Airports
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Help
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;