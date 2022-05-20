import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Brewdog-Logo-Background-PNG-Image-1.png";

const Header = (props) => {
  const { isNavBar, setIsNavBar } = props;

  return (
    <>
      <section className={styles.header}>
        <div className={styles.btnWrapper}>
        <button className={styles.button} onClick={(e)=> setIsNavBar(!isNavBar)}>Filter</button>
        </div>

        <div className={styles.title}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
      </section>
    </>
  );
};

export default Header;
