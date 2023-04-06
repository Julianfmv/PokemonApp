import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({name, types, image, id, defense}) => {
    return (
        <div className={style.card}>
          <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name?.toUpperCase()}</h2>
          </Link>
          <img className={style.image} src={image} alt={name} />
          <h3 className={style.defenses}>Defense:{defense} </h3> 
          <h2 className={style.types}>Types: {types}</h2>
        </div>
      );
}
export default Card