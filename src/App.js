import React, { useEffect, useState } from 'react';
import './App.css';
//Components
import Recipe from './component/Recipe';
import Header from './component/Header';

const App = () => {
  const APP_ID='8d432cf3'
  const APP_KEY='718d73847344e21637001011f2dd0af1'
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Paneer');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query, APP_ID, APP_KEY]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const handleInputFocus = () => {
    const searchBar = document.querySelector('.search-bar');
    searchBar.placeholder = '';
  };

  const handleInputBlur = () => {
    const searchBar = document.querySelector('.search-bar');
    if (!search) {
      searchBar.placeholder = 'Enter dishes names correct in English';
    }
  };

  return (
    <div>
      <Header />
      <div className="App">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Enter dish names correct in English"
            onChange={updateSearch}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
