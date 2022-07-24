import React from 'react';

import './Recipes.css';
function Recipes({label,image,calories}){
    return(
        <div className='recipe'>
            <h3>{label}</h3>
            <img src={image} alt=""/>
            <p>Calories: {calories}</p>
        </div>
    );
}
export default Recipes