import Items from "../components/ui/List.jsx";
import ButtonUsage from "../components/ui/Button.jsx";
import SearchBar from "../components/ui/searchbar.jsx";
import HotelCard from "../components/ui/card.jsx";
import Subscribe from "./subsecribe.jsx";
import Header from "../components/ui/header.jsx"

const Home = () => {
  return (
    <section>
      <Header title={" A Lifetime of discounts? It's Genius."} 
        text={"Get rewarded for your travels - unlock instant savings of 10% or more with a free TravelEase account."}
      />
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center p-4">
        <img
          className="w-full md:w-[85%] h-60 rounded-lg"
          src="./public/imag/anglesey br.jpg"
          alt=""
        />
        <img
          className="w-full md:w-[85%] h-60 rounded-lg"
          src="./public/imag/Helsinki.jpg"
          alt=""
        />
        <img
          className="w-full md:w-[85%] h-60 rounded-lg"
          src="./public/imag/takayama .jpg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-white text-center md:text-left">
        <div>
          <h1 className="text-3xl font-bold">Anglesy</h1>
          <h2 className="text-xl font-semibold">260 properties</h2>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Helsinki</h1>
          <h2 className="text-xl font-semibold">400 properties</h2>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Kyoto</h1>
          <h2 className="text-xl font-semibold">180 properties</h2>
        </div>
      </div>

      <h1 className="p-4 font-extrabold text-2xl text-center md:text-left">
        Browse by property type
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        <img
          className="w-full h-[155px] rounded-lg"
          src="./public/imag/hotel.jpg"
          alt=""
        />
        <img
          className="w-full h-[155px] rounded-lg"
          src="./public/imag/apartement.jpg"
          alt=""
        />
        <img
          className="w-full h-[155px] rounded-lg"
          src="./public/imag/resort.jpeg"
          alt=""
        />
        <img
          className="w-full h-[155px] rounded-lg"
          src="./public/imag/villa.jpg"
          alt=""
        />
        <img
          className="w-full h-[155px] rounded-lg"
          src="./public/imag/cabin.jpg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 text-center md:text-left">
        <div>
          <h1 className="text-2xl font-bold">Hotels</h1>
          <h2 className="text-xl text-slate-500">2500 hotels</h2>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Apartments</h1>
          <h2 className="text-xl text-slate-500">4020 hotels</h2>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Resorts</h1>
          <h2 className="text-xl text-slate-500">4020 hotels</h2>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Villas</h1>
          <h2 className="text-xl text-slate-500">1000 hotels</h2>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Cabin</h1>
          <h2 className="text-xl text-slate-500">1820 hotels</h2>
        </div>
      </div>

      <h1 className="p-4 font-extrabold text-2xl text-center md:text-left">
        Homes guests love
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 justify-items-center">
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
                AriPort
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Helps
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
                AriPort
              </li>
              <li className="px-4 py-2 border-b border-gray-200 hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out">
                Helps
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
