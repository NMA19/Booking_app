
const ButtonGroup = ({ onFilterChange }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="inline-flex shadow-sm rounded-md mb-5" role="group">
        <button
          type="button"
          className="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('1-3')}
        >
          1 - 3 passengers
        </button>
        <button
          type="button"
          className="border-t border-b border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('4-7')}
        >
          4 - 7 passengers
        </button>
        <button
          type="button"
          className="rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          onClick={() => onFilterChange('all')}
        >
          All taxis
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;
