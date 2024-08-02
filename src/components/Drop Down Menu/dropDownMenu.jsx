import { useState, useEffect } from "react";

const DropdownMenu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({});

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (optionLabel) => {
    setCheckedOptions(prev => ({
      ...prev,
      [optionLabel]: !prev[optionLabel]
    }));
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full p-4 text-base font-bold text-left text-gray-700 bg-white border border-gray-300  hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      >
        <span>{title}</span>
        <span className="ml-2">
          {isOpen ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      </button>
      
      {isOpen && (
        <div className="z-10 bg-white rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option, index) => (
              <label key={index} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  checked={checkedOptions[option.label] || false}
                  onChange={() => handleCheckboxChange(option.label)}
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;