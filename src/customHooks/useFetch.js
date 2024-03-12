import { useEffect, useState } from "react";
import { fetchPokemonList } from "../utils/fetchPokemon";

export function useFetchData(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetchPokemonList(url);
      setData(response);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [loading, data, error];
}

export function useMultipleFetchData(url, callback) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetchPokemonList(url);
      const tempArray = callback(response);
      const arr = tempArray.map(async (value) => {
        return await fetchPokemonList(value);
      });
      const resolvePromiseData = await Promise.all(arr);
      setData(resolvePromiseData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [loading, data, error];
}
