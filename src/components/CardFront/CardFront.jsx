import React from 'react'
import styles from "./CardFront.module.scss"

const CardFront = (props) => {
    const { name, tagline, image_url, abv } = props.beer;

  return (
    <div className={styles.cardFront}>
    <h2>{name}</h2>
    <img src={image_url} alt="{name}" />

    <section className={styles.beerDetails}>
      <p>{tagline}</p>
      <h3>{abv} %</h3>
    </section>
  </div>
  )
}

export default CardFront