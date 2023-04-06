import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import * as actions from '../../redux/actions/'
import style from './Detail.module.css'

const Detail = () => {

    const navigate = useNavigate();
    const whereTo = () => navigate('/Home');
    
    const { id } = useParams();

    const [currentPokemon, setCurrentPokemon] = useState();
    
    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`)
        .then(res => setCurrentPokemon(res.data))
        .catch(err => console.error(err))
    


    }, [id])



    return (
        <div className={style.pokemonDetails}>
          <button className={style.goBackButton} onClick={whereTo}>Go Back</button>
          <h5 className={style.pokemonId}>#{currentPokemon?.id}</h5>
          <h2 className={style.pokemonName}>{currentPokemon?.name.toUpperCase()}</h2>
          <img className={style.pokeGif} src={currentPokemon?.image} alt={currentPokemon?.name} />
          <div className={style.pokemonInfo}>
            <h4 className={style.pokemonType}>Types: {currentPokemon?.Types}</h4>
            <h4 className={style.pokemonHeight}>Height: {currentPokemon?.height} inches</h4>
            <h4 className={style.pokemonWeight}>Weight: {currentPokemon?.weight} kg.</h4>
            <h4 className={style.pokemonHp}>HP: {currentPokemon?.hp}</h4>
            <h4 className={style.pokemonDefense}>Defense: {currentPokemon?.defense}</h4>
            <h4 className={style.pokemonAttack}>Attack Power: {currentPokemon?.attack}</h4>
            <h4 className={style.pokemonSpeed}>Speed: {currentPokemon?.speed} </h4>
          </div>
        </div>
      );
}

export default Detail;