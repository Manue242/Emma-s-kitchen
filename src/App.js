import React, { useState } from 'react';
import Home from './Home';
import ShoppingList from './shoppingList';
import LoginForm from './LoginForm';
import Recipes from './Recipes';
import './App.css';
import SignUpForm from './SignUpForm';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  const addToShoppingList = (ingredients) => {
    setShoppingList(prevList => {
      const updatedList = [...prevList];
      ingredients.forEach(ingredient => {
        const existing = updatedList.find(item => item.name === ingredient.name);
        if (existing) {
          existing.quantity += ingredient.quantity;
        } else {
          updatedList.push({ ...ingredient });
        }
      });
      return updatedList;
    });
    setCurrentPage('shopping');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage('recipes');
  };

  return (
    <div className="App">
      <header> 
        <img src="./images/logo.png" alt="Logo" />
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setCurrentPage('home')}>Accueil</a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage('shopping')}>Liste de courses</a>
            </li>
            <li className="dropdown">
              <a href="#">Recettes</a>
              <div className="dropdown-content">
                <a href="#" onClick={() => handleCategoryClick('Toutes')}>Toutes</a>
                <a href="#" onClick={() => handleCategoryClick('Entrées')}>Entrées</a>
                <a href="#" onClick={() => handleCategoryClick('Plats')}>Plats</a>
                <a href="#" onClick={() => handleCategoryClick('Desserts')}>Desserts</a>
                <a href="#" onClick={() => handleCategoryClick('Recettes véganes')}>Recettes véganes</a>
                <a href="#" onClick={() => handleCategoryClick('Idées d\'apéro')}>Idées d'apéro</a>
              </div>
            </li>
            <li>
              <a href="#">Astuces et Conseils</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-button-home" onClick={() => setCurrentPage('login')}>
            <span>Connexion</span>
          </button>
        </div>
      </header>
      <main>
        {currentPage === 'home' && <Home addToShoppingList={addToShoppingList} />}
        {currentPage === 'shopping' && <ShoppingList shoppingList={shoppingList} />}
        {currentPage === 'login' && <LoginForm navigateToSignUp={() => setCurrentPage('signup')} />}
        {currentPage === 'signup' && <SignUpForm navigateToLogin={() => setCurrentPage('login')} />}
        {currentPage === 'recipes' && <Recipes category={selectedCategory} addToShoppingList={addToShoppingList} />}

      </main>
      <footer>
        <p>Mentions légales | Politique de confidentialité | Contact</p>
      </footer>
    </div>
  );
}

export default App;
