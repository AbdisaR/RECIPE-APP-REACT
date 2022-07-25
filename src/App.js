import React, {useState,useEffect} from 'react';
import './App.css';
 import Recipes from './Recipes';
function App() {
  const api_id='3ac1176e';
  const api_key='c7e5f202069a72a2db9b1a12029cba0b';
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
   useEffect(()=>{
    getRecipes();
  },[query]);

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${api_id}&app_key=${api_key}`);
    const data = await response.json(); 
    setRecipe(data.hits);
    console.log(data.hits[0].recipe);
  }

 const updateSearch = e => {
  setSearch(e.target.value);
 
 }
 const querySearch = e =>{
  e.preventDefault();
   setQuery(search);
   setSearch('');
 }
   return(
      <div className='app'>
        <form className="search" onSubmit={querySearch}>
        <input className="search-field" value={search} onChange={updateSearch} type="text" placeholder="Enter recipes"/>
        <button className="search-button" type="submit" >Search</button>
        </form>
        <div className="recipes">
        {
          recipe.map( rec => (
            <Recipes key={rec.recipe.label} label={rec.recipe.label} image={rec.recipe.image} calories={rec.recipe.calories}/>
          ))
        }
        </div>
      </div>
  );
}

export default App;