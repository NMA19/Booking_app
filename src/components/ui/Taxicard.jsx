import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const TaxiCard = ({ title, description, passengers, bags, meetGreet, cancellation }) => {
  return (
    <div className="relative flex w-full sm:w-[400px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-2 sm:m-0">
      <div className="p-4 sm:p-6">
        <h5 className="mb-2 block font-sans text-lg sm:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-sm sm:text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="relative sm:left-10 sm:bottom-6 px-4 sm:px-0">
        <ul className="mt-2 sm:mt-4 space-y-2 sm:space-y-4">
          <li className="flex items-center gap-2 sm:gap-1">
            <PersonIcon style={{ fontSize: '1.25rem', sm: { fontSize: '1.5rem' } }} />
            <h3 className="text-sm sm:text-base">{passengers} passengers</h3>
          </li>
          <li className="flex items-center gap-2 sm:gap-1">
            <BusinessCenterIcon style={{ fontSize: '1.25rem', sm: { fontSize: '1.5rem' } }} />
            <h3 className="text-sm sm:text-base">{bags} standard bags</h3>
          </li>
          <li className="flex items-center gap-2 sm:gap-1">
            <CheckCircleOutlineRoundedIcon style={{ fontSize: '1.25rem', sm: { fontSize: '1.5rem' }, color: 'blue' }} />
            <h3 className="text-blue-800 text-sm sm:text-base">{meetGreet}</h3>
          </li>
          <li className="flex items-center gap-2 sm:gap-1">
            <CheckRoundedIcon style={{ fontSize: '1.25rem', sm: { fontSize: '1.5rem' }, color: 'green' }} />
            <h3 className="text-green-800 text-sm sm:text-base">{cancellation}</h3>
          </li>
        </ul>
      </div>
      <div className="p-4 sm:p-6 pt-0">
        <button
          className="select-none rounded-lg bg-blue-500 py-2 px-4 sm:py-3 sm:px-6 text-center align-middle font-sans text-xs sm:text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TaxiCard;
