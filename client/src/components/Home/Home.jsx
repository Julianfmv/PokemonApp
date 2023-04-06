import React, {useEffect, useState} from 'react'
import CardContainer from '../CardContainer/CardContainer';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import style from './Home.module.css'


const Home = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(actions.getAllPokemons())
        dispatch(actions.getTypes())
    }, [dispatch])
    
    const types = useSelector(state => state.allTypes)

    const [order, setOrder] = useState('');
    const [attack, setAttack] = useState('');


    function handleFilterByType (event) {
        dispatch(actions.filterByType(event.target.value))
    }
    function handleFilterCreated (event) {
        dispatch(actions.filterBySource(event.target.value))
    }
    function handleOrderByName (event) {
        event.preventDefault();
        dispatch(actions.orderByName(event.target.value))
        setOrder(`Ordered by ${event.target.value}`)
    }
    function handleOrderByAttack (event){
        event.preventDefault();
        dispatch(actions.orderByAttack(event.target.value))
        setAttack(`Ordered By ${event.target.value}`)
    }
    




    return (
        <div className={style.home}>
          <nav className={style.nav}>
            <SearchBar />
            {/* <h1 className={style.title}>PokeApp</h1> */}
          </nav>
          <div className={style.filters}>
            <label className={style.label} htmlFor="byName">
              Filter by Name
            </label>
      
            <select
              className={style.select}
              name="byName"
              id="byName"
              defaultValue="Default"
              onChange={handleOrderByName}
            >
              <option value="Default">Default</option>
              <option value="Ascendent">Ascendent</option>
              <option value="Descendent">Descendent</option>
            </select>
      
            <label className={style.label} htmlFor="byAttack">
              Filter By Attack
            </label>
            <select
              className={style.select}
              name="byAttack"
              id="byAttack"
              defaultValue="Default"
              onChange={handleOrderByAttack}
            >
              <option value="Default">Default</option>
              <option value="Ascendent">Ascendent</option>
              <option value="Descendent">Descendent</option>
            </select>
      
            <label className={style.label} htmlFor="bySource">
              Filter by Source
            </label>
            <select
              className={style.select}
              name="bySource"
              id="bySource"
              defaultValue="All"
              onChange={handleFilterCreated}
            >
              <option value="All">All</option>
              <option value="Database">Database</option>
              <option value="Api">Api</option>
            </select>
      
            <label className={style.label} htmlFor="byTypes">
              Filter by Types
            </label>
            <select
              className={style.select}
              name="byTypes"
              id="byTypes"
              defaultValue="All"
              onChange={handleFilterByType}
            >
              <option value="All">All</option>
              {types.map((type) => (
                <option value={type.name} key={type.id}>
                  {type?.name}
                </option>
              ))}
            </select>
          </div>
          <CardContainer />
        </div>
      );
    
}


export default Home;