
const ButtonGroup = ({ onFilterChange }) => {
  return (
    <div className="max-w-full md:max-w-md lg:max-w-lg mx-auto">
      <div className="inline-flex shadow-sm rounded-md mb-5 w-full sm:w-auto" role="group">
        <button
          type="button"
          className="w-full md:w-1/3 lg:w-auto rounded-l-lg border border-gray-200 bg-white text-xs md:text-sm lg:text-base font-medium px-2 md:px-4 lg:px-6 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('1-3')}
        >
          1 - 3 passengers
        </button>
        <button
          type="button"
          className="w-full md:w-1/3 lg:w-auto border-t border-b border-gray-200 bg-white text-xs md:text-sm lg:text-base font-medium px-2 md:px-4 lg:px-6 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('4-7')}
        >
          4 - 7 passengers
        </button>
        <button
          type="button"
          className="w-full md:w-1/3 lg:w-auto rounded-r-md border border-gray-200 bg-white text-xs md:text-sm lg:text-base font-medium px-2 md:px-4 lg:px-6 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('all')}
        >
          All taxis
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
