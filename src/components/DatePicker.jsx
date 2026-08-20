import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ label, id, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type="date"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DatePicker;
