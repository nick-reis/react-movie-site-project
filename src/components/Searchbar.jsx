import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      navigate("/search/" + searchValue.replace(/ /g, "+"));
    }
  };

  return (
    <div className="bg-purple-950 rounded-full flex items-center px-2 w-[200] sm:w-[400] lg:w-[500]">
      <AiOutlineSearch size={20} />
      <input
        onChange={onChange}
        onKeyUp={handleKeyPress}
        className="bg-transparent p-2 w-full t focus:outline-none"
        type="text"
        value={searchValue}
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
