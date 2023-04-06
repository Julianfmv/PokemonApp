import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions';
import axios from 'axios';
import validator from './validator';
import style from './Form.module.css';

const Form = () => {

    const dispatch = useDispatch();
 
    const navigate = useNavigate();
    const whereTo = () => navigate('/Home');

    let types = useSelector(state => state.allTypes);

    const [pokemonData, setPokemonData] = useState({
        name: '',
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        image:'',
        Types:[],
    })
    const [errors, setErrors] = useState({})

    // const errorKeys = Object.keys(errors);
    // const isDisabled = errorKeys.length > 0

    // const [isdisabled, setDisabled] = useState({
    //     state:true
    // })
    // const disableSubmitHandler = () => {

    // }

    // const disableSubmitHandler = () => {
    //     setDisabled({
    //         ...isdisabled,
    //         isdisabled:false

    //     })
    // }

    const inputHandler = (event) => {
       setPokemonData({
          ...pokemonData,
          [event.target.name]:event.target.value
        });
        setErrors(
            validator({
               ...pokemonData, 
              [event.target.name]:event.target.value
            })
        )          
      }
    //   const deleteHandler = (ele) => {
    //     setPokemonData({
    //         ...pokemonData,
    //         types: pokemonData.types.filter( type => type !== ele)
    //     })
    //   }

    const submitHandler = async(event) => {
        event.preventDefault();
        try {
            if (Object.entries(errors).length === 0) {
                parseInt(pokemonData.types)

                await axios.post('http://localhost:3001/pokemons/', pokemonData);
                alert("Congratulations! you've just created a new Pokemon!")
            }
            else{
                alert('You have to fill in all the fields!')
            }
            
        } catch (error) {
            alert(`Oops, something went wrong. Try again! error:${error.message} `)
        }
    }
    useEffect(() => {
        dispatch(actions.getTypes())
    },[dispatch])



    return(
        <div>
        <form className= {style.actualForm} onSubmit={submitHandler}>

        <button className={style.formButtons}onClick={whereTo}>Go back home</button>

            <h1>Create a new Pokemon!</h1>

        <label  className={style.actualLabel}htmlFor="name">Name: </label>
        <input className={style.actualInput} id="name" name='name' placeholder="Enter a name"  value={pokemonData.name} onChange={inputHandler}  />
        {(errors?.name && pokemonData.name !== '' )&& <p style={{color: 'red'}}>{errors.name}</p>}

        <label className={style.actualLabel} htmlFor="hp">Hp: </label>
        <input className={style.actualInput} value={pokemonData.hp}onChange={inputHandler} id="hp" placeholder="Enter a number" name='hp'/>
        {(errors?.hp && pokemonData.hp !== '' )&& <p style={{color: 'red'}}>{errors.hp}</p>}

        <label className={style.actualLabel} htmlFor="attack">Attack: </label>
        <input className={style.actualInput} value={pokemonData.attack}id="attack" onChange={inputHandler} placeholder="Enter a number"  name='attack'/>
        {errors.attack && <p style={{color: 'red'}}>{errors.attack}</p>}

        <label  className={style.actualLabel}htmlFor="defense">Defense: </label>
        <input className={style.actualInput} value={pokemonData.defense}id="defense" onChange={inputHandler} placeholder="Enter a number"  name='defense'/>
        {errors.defense && <p style={{color: 'red'}}>{errors.defense}</p>}
    
        <label  className={style.actualLabel}htmlFor="speed">Speed: </label>
        <input className={style.actualInput} value={pokemonData.speed} id="speed" onChange={inputHandler} placeholder="Enter a number" name='speed' />
        {errors.speed && <p style={{color: 'red'}}>{errors.speed}</p>}
        
        
        <label  className={style.actualLabel}htmlFor="height">Height: </label>
        <input className={style.actualInput} value={pokemonData.height} type="text" id="height" onChange={inputHandler} placeholder="Enter a number"  name='height'/>
        {errors.height && <p style={{color: 'red'}}>{errors.height}</p>}
        
        <label className={style.actualLabel} htmlFor="weight">Weight: </label>
        <input className={style.actualInput} value={pokemonData.weight}type="text" id="weight" onChange={inputHandler} placeholder="Enter a number"  name='weight'/>
        {errors.weight && <p style={{color: 'red'}}>{errors.weight}</p>}
        
        <label className={style.actualLabel} htmlFor="image">Image URL: </label>
        <input className={style.actualInput} value={pokemonData.image}type="url" id="image" onChange={inputHandler} placeholder="Enter a valid url"  name='image'/>
        {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}

        <label className={style.actualLabel} htmlFor="types">Types: </label>
        <select className={style.actualSelect}multiple={true} value={pokemonData.Types} name='types' onChange={inputHandler}>
                {types.map((type, index) => <option key={index} value={type.id}>{type.name}</option>)}
            </select>
        {errors.types && <p style={{color: 'red'}}>{errors.types}</p>}


        <button className={style.formButtons} type="submit" disabled={false}>Create!</button>
        </form>
</div>
    )
}


export default Form


