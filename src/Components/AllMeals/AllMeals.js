import axios from 'axios';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const AllMeals = () => {
    const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('')

    useEffect(()=>{
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => {
          console.log(res.data.meals)
          setMeals(res.data.meals)
        })
        .catch(err => console.log(err.message))
       
        
      },[search])
      const handleChange = (e)=>{
        console.log(e.target.value);
        if(e.target.value === null){
            return alert('not valid')
        }
        else{
            setSearch(e.target.value)
        }
        
      }
     


    return (
        <div className='container'>

           
            <div className="input">
            <input type="search" placeholder='Enter Meal Name' onChange={handleChange} required/>
            </div>
            {/* <button onClick={()=>submitButton()}>Search</button> */}
            <div className="meal-card">
            {(meals ===null)?<h2>Please, Enter Valid Meal Name</h2> :meals.map(meal=>{
                return (
                    <Meal key={meal.idMeal} meal={meal}></Meal>
                )
            })}
            </div>
            
        </div>
    );
};

export default AllMeals;