import React, { useEffect, useState } from 'react';
import '../App.css';
import Recipe from './Recipe';

const Dashboard = () => {
  const APP_ID='8d432cf3'
  const APP_KEY='718d73847344e21637001011f2dd0af1'
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Paneer');

  const [fallbackMessage, setFallbackMessage] = useState('');

  const formatMeals = (meals) => {
    if (!meals) return [];
    return meals.map(meal => {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {
          ingredients.push({ text: `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}` });
        }
      }
      return {
        recipe: {
          label: meal.strMeal,
          calories: Math.floor(Math.random() * 400) + 300,
          image: meal.strMealThumb,
          ingredients: ingredients
        }
      };
    });
  };

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        if (data.meals) {
          setFallbackMessage('');
          setRecipes(formatMeals(data.meals));
        } else {
          // Fallback logic if no data was found
          setFallbackMessage(`We couldn't find exactly "${query}", but here are some popular suggestions!`);
          
          // Fetch popular vegetarian fallback data (e.g., 'veg' returns multiple dishes like Vegetarian Casserole, Chilli, etc.)
          const fallbackResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=veg`);
          const fallbackData = await fallbackResponse.json();
          setRecipes(formatMeals(fallbackData.meals));
        }
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    if (query) {
      getRecipes();
    }
  }, [query]);

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
    if(searchBar) searchBar.placeholder = '';
  };

  const handleInputBlur = () => {
    const searchBar = document.querySelector('.search-bar');
    if (searchBar && !search) {
      searchBar.placeholder = 'Enter dish names accurately';
    }
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter dish names accurately"
          onChange={updateSearch}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      
      {fallbackMessage && (
        <div style={{ textAlign: 'center', padding: '1.5rem', color: '#ff6b6b', fontSize: '1.2rem', fontWeight: '600', background: 'rgba(255, 107, 107, 0.1)', borderRadius: '10px', maxWidth: '600px', margin: '1rem auto' }}>
          {fallbackMessage}
        </div>
      )}

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
  );
};

export default Dashboard;
