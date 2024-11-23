import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filterYear, setFilterYear] = useState("");

  const handleChange = (e) => {
    const year = e.target.value;
    setFilterYear(year);
    onFilterChange(year);
  };

  return (
    <div>
      <label>
        Filter by Graduation Year:
        <input
          type="number"
          value={filterYear}
          onChange={handleChange}
          placeholder="Enter Year"
        />
      </label>
    </div>
  );
};

export default Filter;
