import React from "react";

function Search({ handleSearch, searchTerm }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />

    </div>
  );
}

export default Search;
