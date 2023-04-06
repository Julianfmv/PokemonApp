import React from "react";
import styles from './Paginate.module.css'


const Paginate = ({pokemonsPerPage, allPokemonsToShow, paginate}) =>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemonsToShow/pokemonsPerPage); i++) {
        pageNumbers.push(i)        
    }


    return (
        <nav className={styles.nav}>
          <ul className={styles.paginate}>
            {pageNumbers &&
              pageNumbers.map((pageNumber) => {
                return (
                  <li key={pageNumber}>
                    <button
                      className={styles.button}
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
      );
}

export default Paginate