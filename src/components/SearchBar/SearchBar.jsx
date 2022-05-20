import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <>
      <input
        className={styles.inputBar}
        type="text"
        placeholder="Search for a beer..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
