const popularRecipes = [
    {
      id: 4,
      title: "Spaghetti bolognaise",
      imageUrl: "./images/recipe1.jpg",
      description: "Une délicieuse recette de spaghetti bolognaise.",
      ingredients: [
        { name: "Spaghetti", quantity: "200g" },
        { name: "Sauce tomate", quantity: "400g" },
        { name: "Viande hachée", quantity: "300g" },
        { name: "Oignon", quantity: "1" },
        { name: "Ail", quantity: "2 gousses" },
        { name: "Huile d'olive", quantity: "2 cuillères à soupe" },
        { name: "Sel", quantity: "selon le goût" },
        { name: "Poivre", quantity: "selon le goût" },
        { name: "Parmesan râpé", quantity: "pour servir" }
      ],
      preparation: "1. Faire cuire les spaghettis selon les instructions sur l'emballage.\n2. Dans une poêle, faire chauffer l'huile d'olive et faire revenir l'oignon et l'ail jusqu'à ce qu'ils soient dorés.\n3. Ajouter la viande hachée et faire cuire jusqu'à ce qu'elle soit dorée.\n4. Ajouter la sauce tomate et laisser mijoter pendant 10 minutes.\n5. Ajouter les spaghettis cuits à la sauce et mélanger.\n6. Servir chaud avec du parmesan râpé."
    },

     
    {
      id: 5,
      title: "Pizza Margherita",
      imageUrl: "./images/recipe3.jpg",
      description: "La classique pizza Margherita avec une croûte croustillante.",
      ingredients: [
        { name: "Pâte à pizza", quantity: "1" },
        { name: "Sauce tomate", quantity: "200g" },
        { name: "Mozzarella", quantity: "200g" },
        { name: "Basilic frais", quantity: "quelques feuilles" },
        { name: "Huile d'olive", quantity: "pour arroser" },
        { name: "Sel", quantity: "selon le goût" },
        { name: "Poivre", quantity: "selon le goût" }
      ],
      preparation: "1. Préchauffer le four à 220°C.\n2. Étaler la pâte à pizza sur une plaque de cuisson.\n3. Étaler la sauce tomate sur la pâte.\n4. Couper la mozzarella en tranches et la disposer sur la sauce tomate.\n5. Assaisonner avec du sel et du poivre.\n6. Cuire au four pendant 15-20 minutes ou jusqu'à ce que la croûte soit dorée et croustillante.\n7. Garnir de feuilles de basilic frais et arroser d'un filet d'huile d'olive avant de servir."
    },

    {
        id: 6,
        title: "Poulet rôti aux herbes",
        imageUrl: "./images/pouletRoti.jpg",
        description: "Un délicieux poulet rôti assaisonné aux herbes.",
        ingredients: [
          { name: "Poulet entier", quantity: "1" },
          { name: "Herbes fraîches (thym, romarin, persil)", quantity: "une poignée" },
          { name: "Ail", quantity: "4 gousses" },
          { name: "Citron", quantity: "1" },
          { name: "Huile d'olive", quantity: "4 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Préchauffer le four à 200°C.\n2. Rincer et sécher le poulet.\n3. Frotter le poulet avec de l'huile d'olive, du sel, du poivre et des herbes fraîches hachées.\n4. Farcir la cavité du poulet avec de l'ail et des quartiers de citron.\n5. Placer le poulet dans un plat de cuisson et cuire au four pendant environ 1 heure ou jusqu'à ce que le poulet soit doré et bien cuit.\n6. Laisser reposer le poulet pendant quelques minutes avant de le découper et de le servir."
      },

      {
        id: 7,
        title: "Ratatouille provençale",
        imageUrl: "./images/ratatouille.jpg",
        description: "Un plat végétarien traditionnel du sud de la France, rempli de légumes frais.",
        ingredients: [
          { name: "Aubergine", quantity: "1" },
          { name: "Courgette", quantity: "1" },
          { name: "Poivron rouge", quantity: "1" },
          { name: "Poivron jaune", quantity: "1" },
          { name: "Tomates", quantity: "2" },
          { name: "Oignon", quantity: "1" },
          { name: "Ail", quantity: "2 gousses" },
          { name: "Huile d'olive", quantity: "2 cuillères à soupe" },
          { name: "Thym frais", quantity: "1 brin" },
          { name: "Basilic frais", quantity: "quelques feuilles" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Couper tous les légumes en petits morceaux.\n2. Faire chauffer l'huile d'olive dans une grande poêle à feu moyen.\n3. Ajouter l'oignon et l'ail et faire revenir pendant quelques minutes jusqu'à ce qu'ils soient tendres.\n4. Ajouter les poivrons et faire cuire pendant 5 minutes.\n5. Ajouter les aubergines, les courgettes et les tomates, ainsi que le thym frais et le basilic frais haché.\n6. Assaisonner avec du sel et du poivre et laisser mijoter pendant environ 20 minutes, en remuant de temps en temps.\n7. Servir chaud ou froid, seul ou avec du riz ou du pain."
      },

      {
        id: 8,
        title: "Tarte aux pommes",
        imageUrl: "./images/tarteauxpommes.jpg",
        description: "Une délicieuse tarte aux pommes faite maison avec une croûte croustillante.",
        ingredients: [
          { name: "Pâte brisée", quantity: "1" },
          { name: "Pommes", quantity: "4" },
          { name: "Sucre", quantity: "100g" },
          { name: "Cannelle", quantity: "1 cuillère à café" },
          { name: "Beurre", quantity: "50g" }
        ],
        preparation: "1. Préchauffer le four à 200°C.\n2. Étaler la pâte brisée dans un moule à tarte.\n3. Éplucher et trancher les pommes en fines lamelles.\n4. Disposer les lamelles de pommes sur la pâte brisée.\n5. Saupoudrer de sucre et de cannelle sur les pommes.\n6. Ajouter des petits morceaux de beurre sur le dessus.\n7. Cuire au four pendant 30-40 minutes ou jusqu'à ce que la croûte soit dorée et les pommes tendres.\n8. Laisser refroidir avant de servir."
      },

      {
        id: 9,
        title: "Steak avec sauce aux champignons",
        imageUrl: "./images/steak.jpg",
        description: "Un délicieux steak grillé accompagné d'une sauce crémeuse aux champignons.",
        ingredients: [
          { name: "Steaks", quantity: "2" },
          { name: "Champignons", quantity: "200g" },
          { name: "Crème fraîche", quantity: "100ml" },
          { name: "Ail", quantity: "2 gousses" },
          { name: "Beurre", quantity: "2 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Faire chauffer le beurre dans une poêle.\n2. Faire cuire les steaks selon votre préférence.\n3. Retirer les steaks de la poêle et réserver au chaud.\n4. Dans la même poêle, faire revenir les champignons et l'ail haché.\n5. Ajouter la crème fraîche et laisser mijoter jusqu'à épaississement.\n6. Assaisonner avec du sel et du poivre.\n7. Servir les steaks nappés de sauce aux champignons."
      },

      {
        id: 10,
        title: "Gigot d'agneau",
        imageUrl: "./images/gigot.jpg",
        description: "Un gigot d'agneau rôti lentement au four avec des herbes aromatiques, pour un plat délicieusement parfumé.",
        ingredients: [
          { name: "Gigot d'agneau", quantity: "1" },
          { name: "Ail", quantity: "4 gousses" },
          { name: "Romarin", quantity: "quelques branches" },
          { name: "Thym", quantity: "quelques branches" },
          { name: "Huile d'olive", quantity: "3 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Préchauffer le four à 180°C.\n2. Faire des incisions dans le gigot d'agneau et y insérer des lamelles d'ail et des branches de romarin et de thym.\n3. Badigeonner le gigot d'huile d'olive et assaisonner avec du sel et du poivre.\n4. Placer le gigot dans un plat allant au four et enfourner pendant 1h30 à 2h, en arrosant régulièrement avec le jus de cuisson.\n5. Servir le gigot d'agneau chaud avec des légumes de saison."
      },

      {
        id: 11,
        title: "Fraisier",
        imageUrl: "./images/fraisier.jpg",
        description: "Un dessert frais et léger composé de couches de génoise, de crème mousseline et de fraises fraîches.",
        ingredients: [
          { name: "Génoise", quantity: "1" },
          { name: "Crème pâtissière", quantity: "500ml" },
          { name: "Fraises", quantity: "500g" },
          { name: "Gelée de fraises", quantity: "100g" },
          { name: "Sucre glace", quantity: "pour saupoudrer" }
        ],
        preparation: "1. Couper la génoise en deux dans l'épaisseur.\n2. Étaler une couche de crème pâtissière sur la moitié inférieure de la génoise.\n3. Disposer des fraises coupées en tranches sur la crème pâtissière.\n4. Recouvrir avec l'autre moitié de génoise.\n5. Étaler une fine couche de gelée de fraises sur le dessus du gâteau.\n6. Décorer le dessus du gâteau avec des fraises entières.\n7. Saupoudrer de sucre glace juste avant de servir."
      },

      {
        id: 12,
        title: "Gâteau au lait",
        imageUrl: "./images/gateauLait.jpg",
        description: "Un gâteau moelleux et parfumé au lait, parfait pour le goûter ou le dessert.",
        ingredients: [
          { name: "Farine", quantity: "250g" },
          { name: "Sucre", quantity: "150g" },
          { name: "Beurre", quantity: "100g" },
          { name: "Oeufs", quantity: "3" },
          { name: "Lait", quantity: "200ml" },
          { name: "Levure chimique", quantity: "1 sachet" },
          { name: "Vanille", quantity: "1 cuillère à café" }
        ],
        preparation: "1. Préchauffer le four à 180°C.\n2. Dans un bol, mélanger la farine et la levure chimique.\n3. Dans un autre bol, battre les oeufs avec le sucre jusqu'à ce que le mélange blanchisse.\n4. Ajouter le beurre fondu, le lait et la vanille au mélange d'oeufs.\n5. Incorporer petit à petit le mélange de farine.\n6. Verser la pâte dans un moule beurré et fariné.\n7. Enfourner pendant 30 à 40 minutes, jusqu'à ce que le gâteau soit doré et gonflé.\n8. Laisser refroidir avant de démouler et de servir."
      },

      {
        id: 13,
        title: "Croissant",
        imageUrl: "./images/croissant.jpg",
        description: "Des croissants frais et croustillants, parfaits pour le petit-déjeuner ou le goûter.",
        ingredients: [
          { name: "Farine", quantity: "500g" },
          { name: "Beurre", quantity: "100g" },
          { name: "Sucre", quantity: "50g" },
          { name: "Levure de boulanger", quantity: "20g" },
          { name: "Lait", quantity: "300ml" },
          { name: "Sel", quantity: "1 pincée" }
        ],
        preparation: "1. Dans un bol, délayer la levure de boulanger dans un peu de lait tiède avec une pincée de sucre.\n2. Dans un grand bol, mélanger la farine avec le sel et le sucre.\n3. Ajouter le beurre ramolli et mélanger jusqu'à obtenir une texture sableuse.\n4. Incorporer le mélange de levure et le reste de lait tiède.\n5. Pétrir la pâte pendant environ 10 minutes, jusqu'à ce qu'elle soit lisse et élastique.\n6. Couvrir la pâte d'un torchon propre et laisser lever dans un endroit chaud pendant 1 à 2 heures, jusqu'à ce qu'elle ait doublé de volume.\n7. Dégazer la pâte et l'étaler en un grand rectangle.\n8. Découper des triangles et rouler chaque triangle en croissant.\n9. Placer les croissants sur une plaque de cuisson tapissée de papier sulfurisé.\n10. Laisser lever à nouveau pendant 1 heure.\n11. Préchauffer le four à 200°C.\n12. Badigeonner les croissants de jaune d'oeuf battu et enfourner pendant 15 à 20 minutes, jusqu'à ce qu'ils soient dorés."
      }    

  ];
  
  export default popularRecipes;
  