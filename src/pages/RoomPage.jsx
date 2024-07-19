import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RoomPage = () => {
  const { hotelName, roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    // Fetch room details based on hotelName and roomId
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`/api/rooms/${hotelName}/${roomId}`);
        const data = await response.json();
        setRoomDetails(data);
      } catch (error) {
        console.error('Failed to fetch room details', error);
      }
    };

    fetchRoomDetails();
  }, [hotelName, roomId]);

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Room Details for {hotelName.replace(/-/g, ' ')}</h1>
      <h2>{roomDetails.name}</h2>
      <p>{roomDetails.description}</p>
      <p>Price: ${roomDetails.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RoomPage;
