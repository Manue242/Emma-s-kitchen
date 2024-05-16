const recipesOfTheDay = [

  {
    id: 1,
    title: "Mousse au chocolat",
    imageUrl: "./images/mousseChocolat.jpg",
    description: "Une délicieuse mousse au chocolat onctueuse et savoureuse.",
    ingredients: [
      { name: "Chocolat noir", quantity: "200g" },
      { name: "Oeufs", quantity: "4" },
      { name: "Sucre", quantity: "50g" },
      { name: "Beurre", quantity: "50g" }
    ],
    preparation: "1. Faire fondre le chocolat noir avec le beurre au bain-marie.\n2. Séparer les blancs des jaunes d'oeufs.\n3. Monter les blancs en neige.\n4. Incorporer les jaunes d'oeufs et le sucre au chocolat fondu.\n5. Ajouter délicatement les blancs en neige au mélange chocolaté.\n6. Réfrigérer pendant au moins 4 heures avant de servir."
  },


  {
    id: 2,
    title: "Boulettes de viande",
    imageUrl: "./images/boulettes.jpg",
    description: "Des boulettes de viande savoureuses et moelleuses, parfaites pour accompagner vos plats de pâtes ou vos sauces.",
    ingredients: [
      { name: "Viande hachée", quantity: "500g" },
      { name: "Oeuf", quantity: "1" },
      { name: "Chapelure", quantity: "50g" },
      { name: "Oignon", quantity: "1" },
      { name: "Ail", quantity: "2 gousses" },
      { name: "Persil", quantity: "quelques brins" },
      { name: "Sel", quantity: "selon le goût" },
      { name: "Poivre", quantity: "selon le goût" }
    ],
    preparation: "1. Dans un bol, mélanger la viande hachée avec l'oeuf, la chapelure, l'oignon et l'ail hachés, le persil ciselé, le sel et le poivre.\n2. Former des boulettes avec le mélange.\n3. Faire chauffer de l'huile dans une poêle.\n4. Faire dorer les boulettes de viande sur toutes les faces.\n5. Les boulettes de viande sont prêtes à être dégustées."
  },

  {
    id: 3,
    title: "Salade César",
    imageUrl:"./images/recipe2.jpg",
    description: "Une savoureuse salade César avec du poulet grillé.",
    ingredients: [
      { name: "Laitue romaine", quantity: "1" },
      { name: "Poulet grillé", quantity: "200g" },
      { name: "Croûtons", quantity: "100g" },
      { name: "Parmesan râpé", quantity: "50g" },
      { name: "Sauce César", quantity: "100ml" }
    ],
    preparation: "1. Laver et couper la laitue romaine en morceaux.\n2. Couper le poulet grillé en dés.\n3. Dans un grand bol, mélanger la laitue, le poulet, les croûtons et le parmesan râpé.\n4. Ajouter la sauce César et mélanger jusqu'à ce que tout soit bien enrobé.\n5. Servir immédiatement."
  }


];
  
export default recipesOfTheDay;