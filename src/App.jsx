import ButtonUsage from './components/ui/Button.jsx';
import Items from './components/ui/list.jsx';
import Button from "@mui/material/Button";
import SearchBar from './components/ui/searchbar.jsx';
import HotelCard from './components/ui/card.jsx';
import HotelCard2 from './components/ui/card2.jsx';
import HotelCard3 from './components/ui/card3.jsx';
import HotelCard4 from './components/ui/card4.jsx';
import Subscribe from './pages/subsecribe.jsx';
import './App.css';

function App() {
  return(   
    <section > 
    <div className='bg-[#1e3a8a] p-1 h-[400px]  '> 
      <h1 className=' m-4 relative left-20 text-white font-bold'>BroBooking-app</h1>
      <ButtonUsage/>
      <Items/>
      <h4 className='m-4 relative left-20 top-36 text-white font-bold text-4xl'>A Lifetime of discounts? it`s Genius. </h4>
      <h1 className='m-4 relative left-20 top-36 text-white '>Get rewarded for your travels-unlock instant saving of 10% or more with a free <span className='font-bold'>brobooking-app</span> account. </h1>
      <Button className="m-3 absolute left-24 top-36" variant="contained">Sing in/ Register</Button>
      </div>
      <SearchBar/>
      <div className="grid grid-cols-3 justify-items-center">
      <img className='w-[85%] h-60 rounded-lg' src="./public/imag/anglesey br.jpg" alt="" />
      <img className='w-[85%] h-[98%] rounded-lg' src="./public/imag/Helsinki.jpg" alt="" />
      <img className='w-[85%] h-60 rounded-lg' src="./public/imag/takayama .jpg" alt="" />
      </div>
      
      <div className="absolute text-white left-14 top-[95%]">
        <h1 className='text-3xl font-bold'>Anglesy</h1>
        <h2 className='text-xl font-semibold'>260 properties</h2>
      </div>
      <div className="absolute text-white left-[38%] top-[95%]">
        <h1 className='text-3xl font-bold'>Helsinki</h1>
        <h2 className='text-xl font-semibold'>400 properties</h2>
      </div>
      <div className="absolute text-white left-[72%] top-[95%]">
        <h1 className='text-3xl font-bold'>Kyoto</h1>
        <h2 className='text-xl font-semibold'>180 properties</h2>
      </div>

      <h1 className='absolute left-8 top-[113%] font-extrabold text-2xl'>Brows by property type</h1>
      
      <div className="inline-flex gap-3 left-8 relative top-24 justify-items-center">
      <img className='w-[50%] h-[155px] rounded-lg' src="./public/imag/hotel.jpg" alt="" />
      <img className='w-[50%] h-[155px] rounded-lg' src="./public/imag/apartement.jpg" alt="" />
      <img className='w-[50%] h-[155px] rounded-lg' src="./public/imag/resort.jpeg" alt="" />
      <img className='w-[50%] h-[155px] rounded-lg' src="./public/imag/villa.jpg" alt="" />
      <img className='w-[50%] h-[155px] rounded-lg' src="./public/imag/cabin.jpg" alt="" />
      </div>

     <div className="absolute text-black left-[2%] top-[145%]">
        <h1 className='text-2xl font-bold'>Hotels</h1>
        <h2 className='text-xl text-slate-500'>2500 hotels </h2>
       </div>
       <div className="absolute text-black left-[21%] top-[145%]">
        <h1 className='text-2xl font-bold'>Apartments</h1>
        <h2 className='text-xl text-slate-500'>4020 hotels</h2>
       </div>
       <div className="absolute text-black left-[40%] top-[145%]">
        <h1 className='text-2xl font-bold'>Resorts</h1>
        <h2 className='text-xl text-slate-500'>4020 hotels</h2>
       </div>
       <div className="absolute text-black left-[59%] top-[145%]">
        <h1 className='text-2xl font-bold'>Villas</h1>
        <h2 className='text-xl text-slate-500'>1000 hotels </h2>
      </div>

      <div className="absolute text-black left-[78%] top-[145%]">
        <h1 className='text-2xl font-bold'>Cabin</h1>
        <h2 className='text-xl text-slate-500 '>1820 hotels </h2>
      </div>
       
      <h1 className='absolute left-8 top-[162%] font-extrabold text-2xl'>Homes guests love</h1>
       <div className="inline-flex left-28 absolute top-[162%] justify-items-center gap-14 w-[86%]">
            <HotelCard/>
            <HotelCard2/>
            <HotelCard4/>
            <HotelCard3/>
         </div>
          <Subscribe/>
  <div  className='inline-flex relative top-[90%]  '>     
    <div className="relative top-11 left-[5%]">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
           <ul className="inline-block">
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Countries</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Regions</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Cities</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">District</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">AriPort</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Helps</li>

           </ul>
         </div>
    </div>

    <div className="relative top-11 left-[7%]">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
           <ul className="inline-block">
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Homes</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Apartments</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Resorts</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Villas</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Hostels</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Guest houses</li>

           </ul>
         </div>
    </div>

    <div className="relative top-11 left-[10%]">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
           <ul className="inline-block">
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Unique places to stay</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Reviews</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Unpacked:Travel articles</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Travel Communities</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Seasonal and holiday deals</li>
           </ul>
         </div>
    </div>

    <div className="relative top-11 left-[10%]">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
           <ul className="inline-block">
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Car rental</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Flight Finder</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Restaurant reservations</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Travel Agents</li>
           </ul>
         </div>
    </div>

    <div className="relative top-11 left-[10%]">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
           <ul className="inline-block">
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Customer Service</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Partner Help</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Careers</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Sustainability</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Press center</li>                
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Safety Resource center</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Investor relations</li>
              <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Terms & condition</li>

           </ul>
         </div>
    </div>
    </div>
    </section>
  
  );
}
export default App;
