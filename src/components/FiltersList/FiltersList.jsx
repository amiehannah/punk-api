import React from "react";
import styles from "./FiltersList.module.scss"
import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { beersWithHighABV, setBeersWithHighABV, beersBrewedBefore,
  setBeersBrewedBefore, acidicBeers, setAcidicBeers} =
    props;
  return (
    <>
      <form action="" className={styles.form}>
        <FilterItem
          beersWithHighABV={beersWithHighABV}
          setBeersWithHighABV={setBeersWithHighABV}
          beersBrewedBefore={beersBrewedBefore}
          setBeersBrewedBefore={setBeersBrewedBefore}
          acidicBeers={acidicBeers}
          setAcidicBeers={setAcidicBeers}
        />
      </form>
    </>
  );
};

export default FiltersList;
