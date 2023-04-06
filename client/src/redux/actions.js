import {
  GET_TYPES,
  GET_POKEMON_ID,
  GET_ALL_POKEMONS,
  FILTER_SOURCE,
  FILTER_TYPE,
  FILTER_SEARCH,
  ORDER_ATTACK,
  ORDER_NAME,
  SET_PAGE,
} from "./actionsTypes";

import axios from "axios";

export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
      alert(`Oops, something went wrong: ${error.message}`);
    }
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
      dispatch({ type: GET_POKEMON_ID, payload: data });
    } catch (error) {
      alert(
        `Oops, something went wrong finding that pokemon: ${error.message}`
      );
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/types");
      dispatch({ type: GET_TYPES, payload: data });
    } catch (error) {
      alert(`Oops, something went wrong: ${error.message}`);
    }
  };
};

export const searchByName = (name) => {
  return (dispatch) => {
    dispatch({ type: FILTER_SEARCH, payload: name });
  };
};

export const filterByType = (type) => {
  return (dispatch) => {
    dispatch({ type: FILTER_TYPE, payload: type });
  };
};

export const filterBySource = (dbOrApi) => {
  return (dispatch) => {
    dispatch({ type: FILTER_SOURCE, payload: dbOrApi });
  };
};

export const orderByName = (select) => {
  return (dispatch) => {
    dispatch({ type: ORDER_NAME, payload: select });
  };
};

export const orderByAttack = (select) => {
  return (dispatch) => {
    dispatch({ type: ORDER_ATTACK, payload: select });
  };
};

export const setPageNumber = (number) => {
  return (dispatch) => {
    dispatch({ type: SET_PAGE, payload: number });
  };
};
