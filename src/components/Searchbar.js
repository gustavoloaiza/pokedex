import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Searchbar(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  //cambia state
  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  //busca pokemon de api
  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChange} />
      </div>

      <div className="searchbar-btn">
        <button onClick={onClick}>
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
