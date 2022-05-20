import React from "react";
import styles from "./NavBar.module.scss";

import SearchBar from "../SearchBar/SearchBar";
import FiltersList from "../FiltersList";

const NavBar = (props) => {
  const {
    searchText,
    setSearchText,
    isNavBar,
    beersWithHighABV,
    setBeersWithHighABV,
    beersBrewedBefore,
    setBeersBrewedBefore,
    acidicBeers,
    setAcidicBeers,
  } = props;

  const renderNav = isNavBar ? styles.nav : styles.navHidden;

  return (
    <>
      <section className={`${styles.nav} ${renderNav}`}>
        <div className={styles.search}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />

          <FiltersList
            beersWithHighABV={beersWithHighABV}
            setBeersWithHighABV={setBeersWithHighABV}
            beersBrewedBefore={beersBrewedBefore}
            setBeersBrewedBefore={setBeersBrewedBefore}
            acidicBeers={acidicBeers}
            setAcidicBeers={setAcidicBeers}
          />
        </div>
      </section>
    </>
  ); 
};

export default NavBar;
