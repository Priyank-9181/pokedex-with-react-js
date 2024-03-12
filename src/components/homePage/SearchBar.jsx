import React from "react";
import styles from "../../styles/components/homePage/searchBar.module.css";

function SearchBar({ setQuery }) {
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="search"
        placeholder="Search Pokemon"
      />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchBar;
