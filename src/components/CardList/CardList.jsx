import React from "react";
import styles from "./CardList.module.scss";

import Card from "../Card";

const CardList = (props) => {
  const { beers, acidicBeers, phBeers } = props;

  const acidicBeerList = phBeers.map((beer) => {
    return (
      <div className={styles.card} key={beer.id}>
        <Card beer={beer} />
      </div>
    );
  });

  const allBeersList = beers.map((beer) => {
    return (
      <div className={styles.card} key={beer.id}>
        <Card beer={beer} />
      </div>
    );
  });

  const renderBeers = acidicBeers ? acidicBeerList : allBeersList;

  return (
    <>
      <section className={styles.grid}>{renderBeers}</section>
    </>
  );
};

export default CardList;
