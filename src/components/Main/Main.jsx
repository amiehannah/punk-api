import React from "react";
import styles from "./Main.module.scss";

import CardList from "../CardList";
import FeedbackPanel from "../FeedbackPanel";

const Main = (props) => {
  const { beers, searchText, acidicBeers, filteredBeers } = props;

  const filterByBeer = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  });

  const contentJsx = filterByBeer.length ? (
    <CardList
      beers={filterByBeer}
      phBeers={filteredBeers}
      acidicBeers={acidicBeers}
    />
  ) : (
    <FeedbackPanel
      header="No Matches"
      text="None of our beers matched that search"
    />
  );

  return (
    <>
      <div className={styles.main}>{contentJsx}</div>
    </>
  );
};

export default Main;
