import LookAt from '../components/ui/Look.jsx';
import Header from '../components/ui/header.jsx';

const Car = () => {
  return (
    <div> 
    
      <Header 
        title="Car hire for any kind of trip"
        text="Find the perfect car for your next trip."
      />
      <div className='relative bottom-5 ' >  
        <LookAt />
      </div>
    </div>
  );
};

export default Car;
