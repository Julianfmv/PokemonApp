import {
  GET_ALL_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  FILTER_SOURCE,
  FILTER_TYPE,
  FILTER_SEARCH,
  ORDER_ATTACK,
  ORDER_NAME,
  RESET_FILTERS
} from "./actionsTypes";

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemonById: {},
  allTypes: [],
  // pageNumber: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        pokemonById: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        allTypes: payload,
      };
    case FILTER_SEARCH:
      const foundPokemon = state.allPokemons.filter(
        (pokemon) => pokemon.name
        .toLowerCase()
        .includes(payload.toLowerCase()) 
      );
      return {
        ...state,
        pokemons: foundPokemon,
      };
    case FILTER_SOURCE:
      let pokemonsToShow;
      if (payload === "Database")
        pokemonsToShow = [...state.allPokemons].filter(
          (pokemon) => pokemon.createdAt
        );
      if (payload === "Api")
        pokemonsToShow = [...state.allPokemons].filter(
          (pokemon) => !pokemon.createdAt
        );
      if (payload === "All") pokemonsToShow = state.allPokemons;

      return {
        ...state,
        pokemons: pokemonsToShow,
      };

    case FILTER_TYPE:
      const allPokemons = state.allPokemons;
      const PokemonsByTypeFiltered =
        payload === "All"
          ? allPokemons
          : allPokemons.filter((el) => el?.Types?.includes(payload + " "));
      return {
        ...state,
        pokemons: PokemonsByTypeFiltered,
      };
      case RESET_FILTERS: 
      return {
        ...state,
        pokemons: state.allPokemons
      }

    case ORDER_NAME:
      const isAscendent = payload === "Ascendent";
      return {
        ...state,
        pokemons: [...state.pokemons].sort((one, two) => {
          if (isAscendent) {
            if (one.name > two.name) return 1;
            if (one.name < two.name) return -1;
            return 0;
          } else {
            if (one.name < two.name) return 1;
            if (one.name > two.name) return -1;
            return 0;
          }
        }),
      };
    case ORDER_ATTACK:
      const isDescendent = payload === "Descendent";
      return {
        ...state,
        pokemons: [...state.pokemons].sort((one, two) => {
          if (isDescendent) {
            if (one.attack < two.attack) return 1;
            if (one.attack > two.attack) return -1;
            return 0;
          } else {
            if (one.attack > two.attack) return 1;
            if (one.attack < two.attack) return -1;
            return 0;
          }
        }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
