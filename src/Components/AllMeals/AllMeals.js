import axios from 'axios';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';


const AllMeals = () => {
  const [data, setData] = useState(false);
    const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('')


  const searchRecipes = async () => {
    setData(true);
    
    const res = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    console.log(res.data.meals)
    setMeals(res.data.meals);
    setData(false);
  };


    useEffect(()=>{
      
      searchRecipes()
        
        
      },[])
      const handleChange = (e)=>{
        setSearch(e.target.value)
        
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        searchRecipes();
        setSearch('')
      }


    return (
      <div className='food-contain'>
        <div className='container'>

           <form onSubmit={ handleSubmit}>
             <div className="form">
                <div className="input">
                    <input className="input-filed"  placeholder='Enter Meal Name' value={search}disabled={data}  onChange={handleChange} required/>
                <div>
                    <input
                    disabled={data || !search}
                    type="submit"
                    className='submit'
                    value="Search"
                    />
                </div>
            </div>
            </div>
            
            </form>
            <div className="meal-card">
            {(meals ===null)?<h3 className='no-found'>Please, Enter Valid Meal Name and Refresh</h3> : meals.map(meal=>{
                return (
                    <Meal key={meal.idMeal} meal={meal}></Meal>
                )
            })}
            </div>
            
        </div>
        </div>
    );
};

export default AllMeals;