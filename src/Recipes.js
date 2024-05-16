import React, { useState } from 'react';
import recipes from './recipesList';
import './Recipes.css';

function Recipes({ category, addToShoppingList }) {
  const [showIngredients, setShowIngredients] = useState({});

  const toggleIngredients = (recipeId) => {
    setShowIngredients(prevState => ({
      ...prevState,
      [recipeId]: !prevState[recipeId]
    }));
  };

  let allRecipes = [...recipes];

  let filteredRecipes = allRecipes;
  if (category !== 'Toutes') {
    filteredRecipes = allRecipes.filter(recipe => recipe.category === category);
  }

  return (
    <div className="recipes-container">
      <h2>{category}</h2>
      <div className="recipes-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {showIngredients[recipe.id] && (
              <div>
                <h4>Ingrédients :</h4>
                <ul className="recipe-ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.quantity} {ingredient.name}
                    </li>
                  ))}
                </ul>
                <h4>Préparation :</h4>
                <p className="recipe-preparation-text">{recipe.preparation}</p>
              </div>
            )}
                        <div className="recipe-buttons">
              <button className="recipe-toggle-button" onClick={() => toggleIngredients(recipe.id)}>
                {showIngredients[recipe.id] ? "Masquer les détails" : "Voir les détails"}
              </button>
              {showIngredients[recipe.id] && (
                <button className="recipe-shopping-button" onClick={() => addToShoppingList(recipe.ingredients)}>Ajouter à la liste de courses</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;

