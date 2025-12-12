export const INITIAL_MENU_DATA = [
  // PETIT DEJEUNER (Breakfast)
  {
    id: "omelette_cheese",
    name: "Omelette with Cheese",
    price: 26.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "omelette_turkey",
    name: "Omelette with Turkey",
    price: 28.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "omelette_kashir",
    name: "Omelette with Kashir",
    price: 24.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "breakfast_marrakchi",
    name: "Marrakchi Breakfast",
    price: 26.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "breakfast_catalan",
    name: "Catalan Breakfast",
    price: 29.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "fried_eggs",
    name: "Fried Eggs (Mirror)",
    price: 20.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "single_egg",
    name: "Single Egg",
    price: 20.0,
    category: "Breakfast",
    modifiers: []
  },
  {
    id: "croissant_breakfast",
    name: "Croissant Breakfast",
    price: 20.0,
    category: "Breakfast",
    modifiers: []
  },

  // BOISSONS CHAUDES (Hot Drinks)
  {
    id: "coffee",
    name: "Coffee",
    price: 11.0,
    category: "Hot Drinks",
    modifiers: [
      {
        name: "Milk Type",
        options: [
          { id: "milk_whole", name: "Whole Milk", priceDelta: 0.0 },
          { id: "milk_semi", name: "Semi-Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_skim", name: "Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_soy", name: "Soy Milk", priceDelta: 1.0 },
          { id: "milk_almond", name: "Almond Milk", priceDelta: 1.0 },
          { id: "milk_oat", name: "Oat Milk", priceDelta: 1.0 }
        ],
        required: false,
        maxSelections: 1
      }
    ]
  },
  {
    id: "coffee_with_milk",
    name: "Coffee with Milk",
    price: 11.0,
    category: "Hot Drinks",
    modifiers: [
      {
        name: "Milk Type",
        options: [
          { id: "milk_whole", name: "Whole Milk", priceDelta: 0.0 },
          { id: "milk_semi", name: "Semi-Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_skim", name: "Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_soy", name: "Soy Milk", priceDelta: 1.0 },
          { id: "milk_almond", name: "Almond Milk", priceDelta: 1.0 },
          { id: "milk_oat", name: "Oat Milk", priceDelta: 1.0 }
        ],
        required: false,
        maxSelections: 1
      }
    ]
  },
  {
    id: "machada",
    name: "Machada",
    price: 11.0,
    category: "Hot Drinks",
    modifiers: [
      {
        name: "Milk Type",
        options: [
          { id: "milk_whole", name: "Whole Milk", priceDelta: 0.0 },
          { id: "milk_semi", name: "Semi-Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_skim", name: "Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_soy", name: "Soy Milk", priceDelta: 1.0 },
          { id: "milk_almond", name: "Almond Milk", priceDelta: 1.0 },
          { id: "milk_oat", name: "Oat Milk", priceDelta: 1.0 }
        ],
        required: false,
        maxSelections: 1
      }
    ]
  },
  {
    id: "nescafe",
    name: "NESCAFE",
    price: 11.0,
    category: "Hot Drinks",
    modifiers: [
      {
        name: "Milk Type",
        options: [
          { id: "milk_whole", name: "Whole Milk", priceDelta: 0.0 },
          { id: "milk_semi", name: "Semi-Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_skim", name: "Skimmed Milk", priceDelta: 0.0 },
          { id: "milk_soy", name: "Soy Milk", priceDelta: 1.0 },
          { id: "milk_almond", name: "Almond Milk", priceDelta: 1.0 },
          { id: "milk_oat", name: "Oat Milk", priceDelta: 1.0 }
        ],
        required: false,
        maxSelections: 1
      }
    ]
  },
  {
    id: "tea_lipton",
    name: "Lipton Tea",
    price: 11.0,
    category: "Hot Drinks",
    modifiers: []
  },
  {
    id: "tea_mint",
    name: "Mint Tea",
    price: 7.0,
    category: "Hot Drinks",
    modifiers: []
  },
  {
    id: "tea_berrad",
    name: "Berrad Tea (Teapot)",
    price: 9.0,
    category: "Hot Drinks",
    modifiers: []
  },

  // BOISSONS FROIDES (Cold Drinks)
  {
    id: "juice_orange",
    name: "Orange Juice",
    price: 17.0,
    category: "Cold Drinks",
    modifiers: []
  },
  {
    id: "juice_apple",
    name: "Apple Juice",
    price: 20.0,
    category: "Cold Drinks",
    modifiers: []
  },
  {
    id: "juice_lemon",
    name: "Lemon Juice",
    price: 20.0,
    category: "Cold Drinks",
    modifiers: []
  },
  {
    id: "juice_banana",
    name: "Banana Juice",
    price: 20.0,
    category: "Cold Drinks",
    modifiers: []
  },
  {
    id: "juice_avocado",
    name: "Avocado Juice",
    price: 27.0,
    category: "Cold Drinks",
    modifiers: []
  }
];

export const INITIAL_CATEGORIES = [
  "Breakfast",
  "Hot Drinks",
  "Cold Drinks"
];
