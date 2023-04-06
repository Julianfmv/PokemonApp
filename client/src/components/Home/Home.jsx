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
        handleReset()
    }, [dispatch])
    
    const types = useSelector(state => state.allTypes)

    const [selectedOptionName, setSelectedOptionName] = useState("Default");
    const [selectedOptionAttack, setSelectedOptionAttack] = useState("Default");
    const [selectedOptionSource, setSelectedOptionSource] = useState("All");
    const [selectedOptionType, setSelectedOptionType] = useState("All");

    function handleFilterByType (event) {
        dispatch(actions.filterByType(event.target.value))
        setSelectedOptionType(event.target.value)
    }
    function handleFilterCreated (event) {
        dispatch(actions.filterBySource(event.target.value))
        setSelectedOptionSource(event.target.value)
    }
    function handleOrderByName (event) {
        event.preventDefault();
        dispatch(actions.orderByName(event.target.value))
        setSelectedOptionName(event.target.value)
    }
    function handleOrderByAttack (event){
        event.preventDefault();
        dispatch(actions.orderByAttack(event.target.value))
        setSelectedOptionAttack(event.target.value)
    }
    const handleReset = () => {
      dispatch(actions.resetFilters())
      setSelectedOptionName('Default')
      setSelectedOptionAttack('Default')
      setSelectedOptionSource('All')
      setSelectedOptionType('All')
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
              value={selectedOptionName}
            >
              <option value="Default" disabled>Default</option>
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
              value={selectedOptionAttack}
            >
              <option value="Default" disabled>Default</option>
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
              value={selectedOptionSource}
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
              value={selectedOptionType}
            >
              <option value="All">All</option>
              {types.map((type) => (
                <option value={type.name} key={type.id}>
                  {type?.name}
                </option>
              ))}
            </select>

            <button onClick={handleReset}>Reset filters!</button>
          </div>
          <CardContainer />
        </div>
      );
    
}


export default Home;