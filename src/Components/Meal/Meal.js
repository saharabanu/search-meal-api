import React from 'react';

const Meal = ({meal}) => {
    
    return (
        <div className=''>
            <div className="card ">
                <div className="img">
                    <img src={meal.strMealThumb} alt="" />
                </div>
                <div className="meal-card-body">
                <h4>{meal.strMeal}</h4>
                <p>{meal.strInstructions.slice(0,50)}</p>
                <div className="btn">
                    <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch More</a>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Meal;