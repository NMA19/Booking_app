const Filter = ({ selectedOption, onOptionChange }) => {
    return (
      <div className="flex justify-center p-2">
        <div className="grid w-full max-w-3xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-white shadow-lg rounded-xl">
          {[
            { id: '1', label: 'Europe' },
            { id: '2', label: 'North America' },
            { id: '3', label: 'Asia' },
            { id: '4', label: 'Africa' },
            { id: '5', label: 'Middle East' },
            { id: '6', label: 'Caribbean' }
          ].map(option => (
            <div key={option.id}>
              <input
                type="radio"
                name="option"
                id={option.id}
                value={option.id}
                className="peer hidden"
                checked={selectedOption === option.id}
                onChange={e => onOptionChange(e.target.value)}
              />
              <label
                htmlFor={option.id}
                className="block cursor-pointer select-none rounded-xl p-2 text-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Filter;
  