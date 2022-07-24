import React, {useState,useEffect} from 'react';
import './App.css';
 import Recipes from './Recipes';
function App() {
  const api_id='3ac1176e';
  const api_key='c7e5f202069a72a2db9b1a12029cba0b';
  const url_api=`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${api_id}&app_key=${api_key}`;
  const [recipe, setRecipe] = useState([]);
  useEffect(()=>{
    getRecipes()
  });

    const getRecipes = async () => {
    const response = await fetch(url_api);
    const data = await response.json(); 
    setRecipe(data.hits);
    console.log(data.hits[0].recipe);
  }
  return(
      <div className='app'>
        {
          recipe.map( rec => (
            <Recipes key={rec.recipe.label} label={rec.recipe.label} image={rec.recipe.image} calories={rec.recipe.calories}/>
          ))
        }
          
      </div>
  );
}

export default App;