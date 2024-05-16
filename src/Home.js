import React, { useState } from 'react';
import popularRecipes from './popularRecipes';
import veganRecipes from './veganRecipes';
import recipesOfTheDay from './recipesOfTheDay';
import './Home.css';

function Home({ addToShoppingList }) {
  const [showIngredients, setShowIngredients] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleIngredients = (recipeId) => {
    setShowIngredients(prevState => ({
      ...prevState,
      [recipeId]: !prevState[recipeId]
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPopularRecipes = popularRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVeganRecipes = veganRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRecipesOfTheDay = recipesOfTheDay.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="Rechercher une recette..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <h2>Recettes du jour</h2>
        <div className="recipes-of-the-day">
          {filteredRecipesOfTheDay.map(recipe => (
            <div key={recipe.id} className="recipe">
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {showIngredients[recipe.id] && (
                <div>
                  <h4>Ingrédients :</h4>
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.quantity} {ingredient.name}
                      </li>
                    ))}
                  </ul>
                  <h4>Préparation :</h4>
                  <p className="preparation-text">{recipe.preparation}</p>
                  <button className="shopping-button" onClick={() => addToShoppingList(recipe.ingredients)}>Ajouter à la liste de courses</button>
                </div>
              )}
              <button onClick={() => toggleIngredients(recipe.id)}>
                {showIngredients[recipe.id] ? "Masquer les détails" : "Voir les détails"}
              </button>
            </div>
          ))}
        </div>

        <h2>Découvrez nos recettes populaires</h2>
        <div className="popular-recipes">
          {filteredPopularRecipes.map(recipe => (
            <div key={recipe.id} className="recipe">
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {showIngredients[recipe.id] && (
                <div>
                  <h4>Ingrédients :</h4>
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.quantity} {ingredient.name}
                      </li>
                    ))}
                  </ul>
                  <h4>Préparation :</h4>
                  <p className="preparation-text">{recipe.preparation}</p>
                  <button className="shopping-button" onClick={() => addToShoppingList(recipe.ingredients)}>Ajouter à la liste de courses</button>
                </div>
              )}
              <button onClick={() => toggleIngredients(recipe.id)}>
                {showIngredients[recipe.id] ? "Masquer les détails" : "Voir les détails"}
              </button>
            </div>
          ))}
        </div>

        <h2>Recettes véganes</h2>
        <div className="vegan-recipes">
          {filteredVeganRecipes.map(recipe => (
            <div key={recipe.id} className="recipe">
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {showIngredients[recipe.id] && (
                <div>
                  <h4>Ingrédients :</h4>
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.quantity} {ingredient.name}
                      </li>
                    ))}
                  </ul>
                  <h4>Préparation :</h4>
                  <p className="preparation-text">{recipe.preparation}</p>
                  <button className="shopping-button" onClick={() => addToShoppingList(recipe.ingredients)}>Ajouter à la liste de courses</button>
                </div>
              )}
              <button onClick={() => toggleIngredients(recipe.id)}>
                {showIngredients[recipe.id] ? "Masquer les détails" : "Voir les détails"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
