import React from 'react';

function ShoppingList({ shoppingList }) {
  return (
    <div className="shopping-list">
      <h2>Liste de courses</h2>
      <ul>
        {shoppingList.map((ingredient, index) => (
          <li key={index}>{ingredient.quantity} {ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
