import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


function App() {
  const [recipes, setRecipes] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(()=> {
    console.log('useEffect') 
    //fetch('https://jsonplaceholder.typicode.com/recipes')
    fetch('https://dummyjson.com/recipes')
      .then(response=> response.json())
      .then(recipes => {setRecipes(recipes.recipes)});
      console.log(recipes);
  },[]) 

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredrecipes= recipes.filter(recipe => {
    return recipe.cuisine.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !recipes.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>My Recipies</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList recipes={filteredrecipes} />
        </Scroll>
      </div>
    );
}

export default App;