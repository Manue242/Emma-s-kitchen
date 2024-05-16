const recipes = [
    {
      id: 1,
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
      id: 2,
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
    },
    
    {
      id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        title: "Langoustes",
        imageUrl: "./images/langoustes.jpg",
        description: "Des langoustes fraîches grillées au beurre à l'ail et aux herbes, pour un repas raffiné et savoureux.",
        ingredients: [
          { name: "Langoustes", quantity: "4" },
          { name: "Beurre", quantity: "100g" },
          { name: "Ail", quantity: "4 gousses" },
          { name: "Persil", quantity: "quelques brins" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Fendre les langoustes en deux dans le sens de la longueur.\n2. Retirer le boyau noir.\n3. Faire fondre le beurre dans une poêle.\n4. Ajouter l'ail haché et le persil ciselé.\n5. Faire griller les langoustes dans le beurre aromatisé, environ 5 minutes de chaque côté.\n6. Assaisonner avec du sel et du poivre.\n7. Servir chaud avec du citron."
      },

      {
        id: 13,
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
        id: 14,
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
      },
      
      {
        id: 15,
        title: "Houmous de pois chiches",
        imageUrl: "./images/houmous.jpg",
        description: "Un dip crémeux et délicieux à base de pois chiches, d'ail, de jus de citron et de tahini.",
        ingredients: [
          { name: "Pois chiches", quantity: "400g (cuits)" },
          { name: "Ail", quantity: "2 gousses" },
          { name: "Jus de citron", quantity: "2 cuillères à soupe" },
          { name: "Tahini", quantity: "2 cuillères à soupe" },
          { name: "Huile d'olive", quantity: "2 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Paprika", quantity: "pour saupoudrer" }
        ],
        preparation: "1. Dans un mixeur, mélanger les pois chiches égouttés, l'ail, le jus de citron, le tahini et l'huile d'olive jusqu'à obtention d'une consistance lisse.\n2. Ajouter du sel selon votre goût.\n3. Transférer dans un bol de service et saupoudrer de paprika.\n4. Servir avec des légumes frais ou des chips de pita."
      },

      {
        id: 16,
        title: "Curry de légumes",
        imageUrl: "./images/curry.jpg",
        description: "Un plat savoureux et épicé composé de légumes variés cuits dans une sauce au curry crémeuse.",
        ingredients: [
          { name: "Légumes variés", quantity: "500g (carottes, pommes de terre, pois chiches, pois verts, etc.)" },
          { name: "Lait de coco", quantity: "400ml" },
          { name: "Curry en poudre", quantity: "2 cuillères à soupe" },
          { name: "Ail", quantity: "2 gousses" },
          { name: "Gingembre frais", quantity: "1 morceau (de la taille d'un pouce), râpé" },
          { name: "Huile végétale", quantity: "2 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Coriandre fraîche", quantity: "pour garnir" }
        ],
        preparation: "1. Faire chauffer l'huile végétale dans une grande poêle et faire revenir l'ail et le gingembre râpé pendant quelques minutes.\n2. Ajouter les légumes coupés en dés et faire revenir pendant 5 minutes.\n3. Ajouter le lait de coco, le curry en poudre et le sel.\n4. Laisser mijoter pendant environ 15-20 minutes ou jusqu'à ce que les légumes soient tendres.\n5. Garnir de coriandre fraîche avant de servir.\n6. Servir avec du riz cuit à la vapeur ou du pain naan."
      },

      {
        id: 17,
        title: "Salade de quinoa aux légumes grillés",
        imageUrl: "./images/saladeQuinoa.jpg",
        description: "Une salade fraîche et nourrissante à base de quinoa, de légumes grillés et d'une vinaigrette citronnée.",
        ingredients: [
          { name: "Quinoa", quantity: "1 tasse (cuite)" },
          { name: "Courgette", quantity: "1, coupée en rondelles" },
          { name: "Poivron rouge", quantity: "1, coupé en lanières" },
          { name: "Tomates cerises", quantity: "1 tasse, coupées en deux" },
          { name: "Oignon rouge", quantity: "1, émincé" },
          { name: "Persil frais", quantity: "2 cuillères à soupe, haché" },
          { name: "Jus de citron", quantity: "2 cuillères à soupe" },
          { name: "Huile d'olive", quantity: "2 cuillères à soupe" },
          { name: "Sel", quantity: "selon le goût" },
          { name: "Poivre", quantity: "selon le goût" }
        ],
        preparation: "1. Cuire le quinoa selon les instructions sur l'emballage et laisser refroidir.\n2. Préchauffer le gril à feu moyen.\n3. Dans un bol, mélanger les légumes coupés avec l'huile d'olive, le sel et le poivre.\n4. Griller les légumes pendant quelques minutes de chaque côté jusqu'à ce qu'ils soient tendres et légèrement dorés.\n5. Dans un grand bol, mélanger le quinoa cuit, les légumes grillés, le persil frais, le jus de citron, le sel et le poivre.\n6. Rectifier l'assaisonnement selon votre goût.\n7. Servir la salade de quinoa aux légumes grillés comme plat principal ou en accompagnement."
      },


      {
        id: 18,
        title: "Risotto aux champignons",
        imageUrl: "./images/risoto.jpg",
        description: "Un plat crémeux et réconfortant, parfait pour les soirées d'automne.",
        ingredients: [
          { name: "Riz Arborio", quantity: "200g" },
          { name: "Champignons", quantity: "250g" },
          { name: "Bouillon de légumes", quantity: "500ml" },
          { name: "Oignon", quantity: "1" },
          { name: "Ail", quantity: "2 gousses" },
          { name: "Vin blanc", quantity: "100ml" },
          { name: "Beurre végétal", quantity: "2 cuillères à soupe" },
          { name: "Parmesan végétal (facultatif)", quantity: "pour servir" },
          { name: "Persil frais", quantity: "pour garnir" }
        ],
        preparation: "1. Dans une casserole, faire fondre le beurre végétal à feu moyen. Ajouter les oignons et l'ail hachés, puis faire revenir jusqu'à ce qu'ils soient translucides.\n2. Ajouter les champignons tranchés et cuire jusqu'à ce qu'ils soient dorés.\n3. Ajouter le riz Arborio et mélanger pour bien enrober de beurre. Cuire pendant quelques minutes jusqu'à ce que les grains de riz deviennent translucides.\n4. Verser le vin blanc et laisser mijoter jusqu'à ce qu'il soit presque complètement absorbé.\n5. Ajouter progressivement le bouillon de légumes chaud, une louche à la fois, en remuant constamment. Attendre que chaque louche de bouillon soit presque complètement absorbée avant d'ajouter la suivante. Continuer jusqu'à ce que le riz soit cuit al dente et que le mélange soit crémeux.\n6. Retirer du feu et ajouter le parmesan végétal (si désiré). Garnir de persil frais et servir chaud."
      }
      
  ];
  
  export default recipes;
  