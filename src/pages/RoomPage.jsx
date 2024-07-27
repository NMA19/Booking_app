import './RoomPage.css';
import List from "../components/ui/List";
import ButtonUsage from "../components/ui/Button";
import SearchBar from "../components/ui/searchbar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Circle from '../components/Reviews/reviewCircle'

const RoomPage = () => {
  const location = useLocation();
  const { destination, date, options } = location.state || {};

  const album = {
    photos: [
      { url: "https://i.pinimg.com/474x/dc/87/a8/dc87a8f8ebb246fcc5a7e811e7629de9.jpg", caption: "Photo 1" },
      { url: "https://images.unsplash.com/photo-1660061540551-0955e8ec5b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Photo 2" },
      { url: "https://i.pinimg.com/474x/12/08/e3/1208e3bc3dda32043cb3881a2646e118.jpg", caption: "Photo 3" },
      { url: "https://i.pinimg.com/474x/dc/9b/9c/dc9b9cbd0a997088fc0a400c08556322.jpg", caption: "Photo 4" },
      { url: "https://i.pinimg.com/564x/38/f8/20/38f820b747de38f6a9f16880dbde5b16.jpg", caption: "Photo 5" },
      { url: "https://i.pinimg.com/474x/e5/59/03/e559037a266cf434719813faf199fb56.jpg", caption: "Photo 6" },
    ],
  };

  const data = [
    {
      Accommodation: "Luxury Bedroom",
      options: [
        { guests: 3, price: "90000 DZ", choices: "breakfast", amount: ["0", "5", "10", "15"] },
        { guests: 2, price: "85000 DZ", choices: "breakfast", amount: ["0", "5", "10", "15"] },
      ],
    },
    {
      Accommodation: "Standard Room",
      options: [
        { guests: 1, price: "45000 DZ", choices: "dinner", amount: ["0", "5", "10", "15"] },
        { guests: 1, price: "45000 DZ", choices: "dinner", amount: ["0", "5", "10", "15"] },
        { guests: 1, price: "45000 DZ", choices: "dinner", amount: ["0", "5", "10", "15"] },
      ],
    },
  ];

  const facilities={
    options:[
      {icon: <LocationOnIcon/>, name: "location"},
      {icon: <LocationOnIcon/>, name: "location"},
      {icon: <LocationOnIcon/>, name: "location"},
    ]
  }

  const stars = 5;

  return (
    <section>
      <div className="bg-red-900 p-1 h-[250px]">
        <h1 className="m-4 relative left-20 text-white font-bold">
        TravelEase
        </h1>
        <ButtonUsage />
        <List />
      </div>
      <SearchBar 
        initialDestination={destination}
        initialDate={date}
        initialOptions={options}
      />
      <div className='mx-auto w-[80%]'>
        <div className="photo-album">
          <div className="flex items-center">
            {Array.from({ length: stars }).map((_, index) => (
              <svg key={index} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-1">Hotel name</h2>
          <div className='flex items-center mb-4'>
            <LocationOnIcon style={{ fontSize: '1.5rem',}} className='text-blue-500'/>
            <span>Hotel location</span>
          </div>
          <div className="photo-grid">
            {album.photos.map((photo, index) => (
              <div key={index} className="photo-item">
                <img src={photo.url} alt={photo.caption} />
              </div>
            ))}
          </div>
        </div>
        <div className='descDiv my-5'>
          <div>
            <h3 className='text-2xl font-bold mb-3'>Description title</h3>
            <p className='leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, maxime tempora voluptatem enim beatae fugit adipisci aspernatur iure iusto ratione eaque quis. Omnis voluptatum nisi dolorum vel commodi corporis labore dolore molestiae doloribus vitae! Iste enim nisi nemo in, cupiditate quisquam dignissimos corporis! Veniam nesciunt quibusdam minima hic cumque quis, id beatae blanditiis veritatis eius quasi cum, iste rerum recusandae tempora tenetur dolore dolorem quisquam atque nam aperiam officia? Adipisci beatae natus, minus quos, amet consectetur distinctio soluta eum veritatis animi voluptatem repudiandae obcaecati provident inventore odit dolor. Dolore, ipsam libero ea beatae dicta vero architecto hic molestias dolores itaque?</p>
            <div className='flex items-center'>
              {facilities.options.map((item, index) => (
                <div key={index} className='flex items-center mr-4'>
                  {item.icon}
                  <span className='ml-2'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='py-5 px-8 bg-blue-50 rounded-lg leading-loose'>
            <h3 className='text-lg font-bold'>Description title</h3>
            <div className='flex items-center'>
              <LocationOnIcon style={{ fontSize: '1.2rem' }} className='text-blue-500'/>
              <span className='infoSpan'>Hotel location</span>
            </div>
            <h3 className='text-base font-bold'>Options with:</h3>
            <p className='infoSpan'>Pool view</p>
            <p className='infoSpan'>Terrace</p>
            <p className='infoSpan'>Terrace</p>
            <h3 className='text-base font-bold'>Activities:</h3>
            <p className='infoSpan'>Fitness centre</p>
            <p className='infoSpan'>Spa and wellness centre</p>
            <p className='infoSpan'>Hot tub/Jacuzzi</p>
            <button 
              className="rounded bg-blue-500 mt-3 py-1 w-full font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                Reserve
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Availability</h1>
          <table className="custom-table mt-5">
            <thead>
              <tr className='sticky top-0'>
                <th>Accommodation Type</th>
                <th>Number of guests</th>
                <th>Today's price</th>
                <th>Your choices</th>
                <th>Select amount</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                item.options.map((option, optIndex) => (
                  <tr key={`${index}-${optIndex}`}>
                    {optIndex === 0 && (
                      <td rowSpan={item.options.length}>
                        {item.Accommodation}
                      </td>
                    )}
                    <td>
                      {(() => {
                        const icons = [];
                        for (let i = 0; i < option.guests; i++) {
                          icons.push(<FontAwesomeIcon icon={faUser} key={i} style={{ marginRight: '2px' }}/>);
                        }
                        return icons;
                      })()}
                    </td>
                    <td>{option.price}</td>
                    <td>{option.choices}</td>
                    <td>
                      <select defaultValue={option.amount[0]} className='rounded border-solid border border-black'>
                        {option.amount.map((amount, amtIndex) => (
                          <option key={amtIndex} value={amount}>
                            {amount}
                          </option>
                        ))}
                      </select>
                    </td>
                    {index === 0 && optIndex === 0 &&
                      (<td className='sticky top-12'>
                        <button 
                          className="rounded bg-blue-500 py-2 px-[7%] font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                            I will reserve
                        </button>
                      </td>)
                    }
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-5">Guest reviews</h1>
          <div className='grid grid-cols-3 gap-y-5'>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Staff</p>
              <Circle value={8.2}/>
            </div>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Staff</p>
              <Circle value={8.2}/>
            </div>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Cleanliness</p>
              <Circle value={5}/>
            </div>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Comfort</p>
              <Circle value={2}/>
            </div>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Value for money</p>
              <Circle value={9.5}/>
            </div>
            <div className='m-auto'>
              <p className='font-bold mx-auto text-center mb-2'>Location</p>
              <Circle value={9.5}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPage;
