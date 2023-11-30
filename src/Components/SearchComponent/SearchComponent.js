import React, { useState } from 'react';
import "./SearchComponent.css";

const SearchComponent = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleInputFocus = () => {
    setIsInputSelected(true);
  };

  const handleInputBlur = () => {
    setIsInputSelected(false);
  };

  return (
    <div className="search-container">
      <div className={`input-container ${isInputSelected ? 'focused' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button onClick={() => console.log('Search clicked')}>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
