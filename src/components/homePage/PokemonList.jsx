import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/components/homePage/pokemonListCard.module.css";

function PokemonList({ data }) {
  if (!data) return <h1>No Data</h1>;
  return (
    <div className={styles.listContainer}>
      {data.map((value, index) => {
        return (
          <PokemonCard
            key={index}
            name={value.name}
            img={value.sprites.other["official-artwork"].front_default}
            id={value.id}
          />
        );
      })}
    </div>
  );
}

export default PokemonList;
