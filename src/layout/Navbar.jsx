import React from "react";
import styles from "../styles/layout/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h1>Pokedex</h1>
      <ul>
        <li>Home</li>
        <li>Pokedex</li>
      </ul>
    </div>
  );
}

export default Navbar;
