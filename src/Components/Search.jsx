import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar">
    <input name="search" id="" className="search-input" placeholder="Search" autoComplete="off"></input>
      <button className="search-btn">
        <FaSearch className="" />
      </button>
    </div>
  );
};

export default Search;
