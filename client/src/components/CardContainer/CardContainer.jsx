import React, {useState} from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import Paginate from '../Paginate/Paginate';
import * as actions from '../../redux/actions';
import style from './CardContainer.module.css'



const CardContainer = ({currentPage ,setCurrentPage}) => {

    const orderedPokemons = useSelector(state => state.pokemons)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    
    const lastIndex = currentPage * pokemonsPerPage //12
    const firstIndex = lastIndex - pokemonsPerPage // 0

    const currentPokemons = orderedPokemons.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return(
        <div className={style.CardContainer}>
           
            <Paginate className={style.paginateContainer}
            pokemonsPerPage= {pokemonsPerPage} 
            allPokemonsToShow= {orderedPokemons.length}
            paginate= {paginate}></Paginate>

        { 
        currentPokemons?.map( (pokemon) => {
            pokemon?.name?.toUpperCase();
         return <Card 
            key={pokemon?.id}
         
            name={pokemon?.name}
            id={pokemon?.id}
            image={pokemon?.image}
            types={pokemon?.Types}
            attack={pokemon?.attack}
            defense={pokemon?.defense}
            hp={pokemon?.hp}
            />

        })
        }
        </div>
    )

}


export default CardContainer