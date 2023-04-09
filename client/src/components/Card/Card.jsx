import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({name, types, image, id, defense}) => {
  const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};
    return (
        <div className={style.card}>
          <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name?.toUpperCase()}</h2>
          </Link>
          <img className={style.image} src={image} alt={name} />
          <h2 className={style.types}>Types: {types}</h2>
        </div>
      );
}
export default Card