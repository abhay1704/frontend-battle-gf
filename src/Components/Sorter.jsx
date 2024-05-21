import { FaSearch } from "react-icons/fa";
import "./Sorter.css";

const Sorter = () => {
  return (
    <div className="sorter">
      <div className="sort-btns">
        <a
          className="categories hover-text hover-text-active"
          data-text="Categories"
          href="/"
        >
          Categories
        </a>
      </div>
      <div className="sort-query">
        <div className="search-category-tags">
          <FaSearch />
          <input type="text" className="" placeholder="Search Category tags" />
        </div>
      </div>
    </div>
  );
};

export default Sorter;
