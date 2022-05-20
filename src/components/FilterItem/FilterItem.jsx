import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const {
    beersWithHighABV,
    setBeersWithHighABV,
    beersBrewedBefore,
    setBeersBrewedBefore,
    acidicBeers,
    setAcidicBeers,
  } = props;

  return (
    <>
      <ul className={styles.filter}>
        <li>
          <label htmlFor="highABV" className={styles.checkbox}>
            <input
              type="checkbox"
              name="filter"
              id="highABV"
              value="abv"
              onClick={() => setBeersWithHighABV(!beersWithHighABV)}
            />
            High ABV ({">"} 6.0%)
          </label>
        </li>

        <li>
          <label htmlFor="classicRange" className={styles.checkbox}>
            <input
              type="checkbox"
              name="filter"
              id="classicRange"
              value="classic"
              onClick={() => setBeersBrewedBefore(!beersBrewedBefore)}
            />
            Classic Range
          </label>
        </li>

        <li>
          <label htmlFor="acidic" className={styles.checkbox}>
            <input
              type="checkbox"
              name="filter"
              id="acidic"
              value="acidic"
              onClick={() => setAcidicBeers(!acidicBeers)}
            />
            Acidic (ph {"<"} 4)
          </label>
        </li>
      </ul>
    </>
  );
};

export default FilterItem;
