import React, { useState } from "react";

const FilterType = ({ setFilterType }) => {
  const setFilter = (e) => {
    setFilterType(e);
  };

  return (
    <div className="filter-type-container">
      <select className="select-filter-type" onChange={setFilter}>
        <option value="all">All</option>
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="water">Water</option>
      </select>
    </div>
  );
};

export default FilterType;
