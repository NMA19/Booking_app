import './RoomPage.css';
import List from "../components/ui/List";
import ButtonUsage from "../components/ui/Button";
import SearchBar from "../components/ui/searchbar";
import { useLocation } from "react-router-dom";

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
    { Name: "John Doe", Age: 28, Occupation: "Software Engineer" },
    { Name: "Jane Smith", Age: 34, Occupation: "Data Scientist" },
    // { Name: "Sam Johnson", Age: 23, Occupation: "Graphic Designer" },
    // { Name: "Sara Lee", Age: 45, Occupation: "Project Manager" }
  ];

  return (
    <section>
      <div className="bg-[#1e3a8a] p-1 h-[250px]">
        <h1 className="m-4 relative left-20 text-white font-bold">
          BroBooking-app
        </h1>
        <ButtonUsage />
        <List />
      </div>
      <SearchBar 
        initialDestination={destination}
        initialDate={date}
        initialOptions={options}
      />
      <div className="photo-album">
        {/* <h2>{album.title}</h2> */}
        <div className="photo-grid">
          {album.photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.url} alt={photo.caption} />
              {/* <div className="caption">{photo.caption}</div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="availabilityDiv">
        <h1 className="text-4xl font-bold">Availability</h1>
        <table className="custom-table mt-5">
          <thead>
            <tr>
              <th>Accommodation Type</th>
              <th>Number of guests</th>
              <th>Today's price</th>
              <th>Your choices</th>
              <th>Select amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RoomPage;