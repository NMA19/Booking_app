import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const TaxiCard = ({ title, description, passengers, bags, meetGreet, cancellation }) => {
  return (
    <div className="relative flex w-[400px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="relative left-10 bottom-6">
        <ul className='mt-4 space-y-4 p-2'>
          <li className='flex items-start gap-1'>
            <PersonIcon style={{ fontSize: '1.5rem' }} />
            <h3>{passengers} passengers</h3>
          </li>
          <li className='flex items-start gap-1'>
            <BusinessCenterIcon style={{ fontSize: '1.5rem' }} />
            <h3>{bags} standard bags</h3>
          </li>
          <li className='flex items-start gap-1'>
            <CheckCircleOutlineRoundedIcon style={{ fontSize: '1.5rem', color: 'blue' }} />
            <h3 className='text-blue-800'>{meetGreet}</h3>
          </li>
          <li className='flex items-start gap-1'>
            <CheckRoundedIcon style={{ fontSize: '1.5rem', color: 'green' }} />
            <h3 className='text-green-800'>{cancellation}</h3>
          </li>
        </ul>
      </div>
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TaxiCard;
