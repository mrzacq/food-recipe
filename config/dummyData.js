import { IMAGES } from "./images";
import { ICONS } from "./icons";

export const trendingRecipes = [
  {
    id: 1,
    name: "Spaghetti With Shrimp Sauce",
    image: IMAGES.spagetti,
    duration: "30 mins",
    serving: 1,
    isBookmark: false,
    category: "Pasta",
    author: {
      profilePic: IMAGES.UserProfile5,
      name: "Maria",
    },
    ingredients: [
      {
        id: 1,
        icon: ICONS.pasta,
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        icon: ICONS.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: ICONS.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 4,
        icon: ICONS.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: ICONS.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: ICONS.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: IMAGES.UserProfile1,
      },
      {
        id: 2,
        profilePic: IMAGES.UserProfile2,
      },
      {
        id: 3,
        profilePic: IMAGES.UserProfile3,
      },
      {
        id: 4,
        profilePic: IMAGES.UserProfile3,
      },
    ],
  },
  {
    id: 2,
    name: "Malaysian Chicken Satay",
    image: IMAGES.satay,
    duration: "50 mins",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: IMAGES.UserProfile8,
      name: "Mandy",
    },
    ingredients: [
      {
        id: 1,
        icon: ICONS.chicken,
        description: "Boneless Chicken Thighs",
        quantity: "1kg",
      },
      {
        id: 2,
        icon: ICONS.lemongrass,
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: 3,
        icon: ICONS.onion,
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: 4,
        icon: ICONS.garlic,
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: 5,
        icon: ICONS.coriander,
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: IMAGES.UserProfile5,
      },
      {
        id: 2,
        profilePic: IMAGES.UserProfile4,
      },
      {
        id: 3,
        profilePic: IMAGES.UserProfile1,
      },
      {
        id: 4,
        profilePic: IMAGES.UserProfile2,
      },
      {
        id: 5,
        profilePic: IMAGES.UserProfile3,
      },
    ],
  },
  {
    id: 3,
    name: "Sarawak Laksa",
    image: IMAGES.laksa,
    duration: "30 mins",
    serving: 1,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: IMAGES.UserProfile9,
      name: "Jessie",
    },
    ingredients: [
      {
        id: 1,
        icon: ICONS.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 2,
        icon: ICONS.lemongrass,
        description: "Lemongrass",
        quantity: "2 stalks",
      },
      {
        id: 3,
        icon: ICONS.egg,
        description: "Egg",
        quantity: "2",
      },
      {
        id: 4,
        icon: ICONS.shrimp,
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 5,
        icon: ICONS.shallot,
        description: "Shallot",
        quantity: "4",
      },
      {
        id: 6,
        icon: ICONS.pasta,
        description: "vermicelli",
        quantity: "100g",
      },
    ],
    viewers: [
      {
        id: 1,
        name: "User 1",
        profilePic: IMAGES.UserProfile1,
      },
      {
        id: 2,
        name: "User 2",
        profilePic: IMAGES.UserProfile2,
      },
      {
        id: 3,
        name: "User 3",
        profilePic: IMAGES.UserProfile3,
      },
    ],
  },
  {
    id: 4,
    name: "Nasi Lemak",
    image: IMAGES.nasiLemak,
    duration: "1 hour",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: IMAGES.UserProfile7,
      name: "Ali Baba",
    },
    ingredients: [
      {
        id: 1,
        icon: ICONS.chilli,
        description: "Dried Chilli",
        quantity: "30g",
      },
      {
        id: 2,
        icon: ICONS.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 3,
        icon: ICONS.egg,
        description: "Egg",
        quantity: "10",
      },
      {
        id: 4,
        icon: ICONS.rice,
        description: "rice",
        quantity: "1kg",
      },
      {
        id: 5,
        icon: ICONS.anchovy,
        description: "Dried anchovies",
        quantity: "3 cups",
      },
    ],
    viewers: [],
  },
];
