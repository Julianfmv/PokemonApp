import React, {useState} from "react";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from '../../redux/actions'
import style from './SearchBar.module.css';


const SearchBar = () =>{

    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const whereTo = () => navigate('/form')

    // const allPokemons = useSelector(state => state.allPokemons);

    const dispatch = useDispatch();

    const searchHandler = (event) => {
        event.preventDefault();
        dispatch(actions.searchByName(search))
    }

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }



     return (
        <nav className={style.nav}>
          <form onSubmit={searchHandler}>
            <input
              className={`${style.input} ${style.search}`}
              placeholder="Search"
              type="search"
              name="search"
              id="search"
              onChange={changeHandler}
              value={search}
            />
            <button className={`${style.button} ${style.submit}`} type="submit">
              🍳Search
            </button>
            <button className={style.button} onClick={whereTo}>
              Create a new Pokemon!
            </button>
          </form>
        </nav>
      );
}

export default SearchBar