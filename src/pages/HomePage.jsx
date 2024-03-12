import React, { useState } from "react";
import Loading from "../components/common/Loading";
import LoadMore from "../components/homePage/LoadMore";
import PokemonList from "../components/homePage/PokemonList";
import { useMultipleFetchData } from "../customHooks/useFetch";
import styles from "../styles/pages/homePage.module.css";
import SearchBar from "../components/homePage/SearchBar";

function HomePage() {
  const [limit, setlimit] = useState(20);
  const [query, setQuery] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [loading, data, error] = useMultipleFetchData(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`,
    (arr) => {
      const temp = arr.results.map((value) => {
        return value.url;
      });
      return temp;
    }
  );

  if (loading) return <Loading />;

  if (!loading && !data && error) return <h1>Something Went Wrong...</h1>;

  console.log(data);

  return (
    <div className={styles.container}>
      <SearchBar setQuery={setQuery} />
      <PokemonList data={data} />
      <LoadMore setlimit={setlimit} />
    </div>
  );
}

export default HomePage;
