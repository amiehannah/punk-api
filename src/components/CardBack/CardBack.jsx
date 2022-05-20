import React from 'react'
import styles from "./CardBack.module.scss"

const CardBack = (props) => {
  const { description, food_pairing, ph, name} = props.beer;

  const foodListItems = food_pairing.map((food) =>
  <li key={food}>- {food}</li>
);
  return (
    <div className={styles.cardBack}>
      <p>{description}</p>
      <p> {name} pH: {ph}</p>
      <section className={styles.pairing}>
      <p className={styles.bold}>Pairs well with:</p>
      <p className={styles.food}>{foodListItems}</p>
      </section>
    </div>
  )
}

export default CardBack