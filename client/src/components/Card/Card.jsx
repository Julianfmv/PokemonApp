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
          <h2 className={style.types}>Types: {types}</h2>
        </div>
      );
}
export default Card