import React from "react";
import styles from "../../styles/components/homePage/pokemonListCard.module.css";

function PokemonCard({ name, img, id }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgContainer}>
        <img src={img} alt={name} />
      </div>

      <div className={styles.cardDescContainer}>
        <h2>{name.toUpperCase()}</h2>
        <br />
        <br />
        <br />
        <br />
        <a href="">
          Details <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}

export default PokemonCard;
