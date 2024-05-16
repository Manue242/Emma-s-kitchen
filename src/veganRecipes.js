const veganRecipes = [

    {
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
  
  export default veganRecipes;
  