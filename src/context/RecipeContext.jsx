import React, { createContext, useEffect } from 'react'
import { useState } from 'react';


export const Recipe = createContext(null);


const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],

      imageUrl: "https://cdn.dummyjson.com/recipe-images/1.webp",

      category: "Dinner",
    },
    {
      id: 2,
      name: "Vegetarian Stir-Fry",
      ingredients: [
        "Tofu, cubed",
        "Broccoli florets",
        "Carrots, sliced",
        "Bell peppers, sliced",
        "Soy sauce",
        "Ginger, minced",
        "Garlic, minced",
        "Sesame oil",
        "Cooked rice for serving",
      ],
      instructions: [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice.",
      ],

      imageUrl: "https://cdn.dummyjson.com/recipe-images/2.webp",
      category: "Vegetarian",
  
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      ingredients: [
        "All-purpose flour",
        "Butter, softened",
        "Brown sugar",
        "White sugar",
        "Eggs",
        "Vanilla extract",
        "Baking soda",
        "Salt",
        "Chocolate chips",
      ],
      instructions: [
        "Preheat the oven to 350°F (175°C).",
        "In a bowl, cream together softened butter, brown sugar, and white sugar.",
        "Beat in eggs one at a time, then stir in vanilla extract.",
        "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
        "Fold in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.",
      ],
    
      imageUrl: "https://cdn.dummyjson.com/recipe-images/3.webp",
      
      category: "Dessert",
    },
    {
      id: 4,
      name: "Chicken Alfredo Pasta",
      ingredients: [
        "Fettuccine pasta",
        "Chicken breast, sliced",
        "Heavy cream",
        "Parmesan cheese, grated",
        "Garlic, minced",
        "Butter",
        "Salt and pepper to taste",
        "Fresh parsley for garnish",
      ],
      instructions: [
        "Cook fettuccine pasta according to package instructions.",
        "In a pan, sauté sliced chicken in butter until fully cooked.",
        "Add minced garlic and cook until fragrant.",
        "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
        "Season with salt and pepper to taste.",
        "Combine the Alfredo sauce with cooked pasta.",
        "Garnish with fresh parsley before serving.",
      ],
   
      imageUrl: "https://cdn.dummyjson.com/recipe-images/4.webp",


      category: "Pasta",
    },
    {
      id: 5,
      name: "Mango Salsa Chicken",
      ingredients: [
        "Chicken thighs",
        "Mango, diced",
        "Red onion, finely chopped",
        "Cilantro, chopped",
        "Lime juice",
        "Jalapeño, minced",
        "Salt and pepper to taste",
        "Cooked rice for serving",
      ],
      instructions: [
        "Season chicken thighs with salt and pepper.",
        "Grill or bake chicken until fully cooked.",
        "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
        "Dice the cooked chicken and mix it with the mango salsa.",
        "Serve over cooked rice.",
      ],
    
      imageUrl: "https://cdn.dummyjson.com/recipe-images/5.webp",
      category: "Chicken",
     
    },
    {
      id: 6,
      name: "Quinoa Salad with Avocado",
      ingredients: [
        "Quinoa, cooked",
        "Avocado, diced",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red bell pepper, diced",
        "Feta cheese, crumbled",
        "Lemon vinaigrette dressing",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
        "Drizzle with lemon vinaigrette dressing and toss to combine.",
        "Season with salt and pepper to taste.",
        "Chill in the refrigerator before serving.",
      ],
    
      imageUrl: "https://cdn.dummyjson.com/recipe-images/6.webp",
      category: "Salad",
    },
    {
      id: 7,
      name: "Tomato Basil Bruschetta",
      ingredients: [
        "Baguette, sliced",
        "Tomatoes, diced",
        "Fresh basil, chopped",
        "Garlic cloves, minced",
        "Balsamic glaze",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 375°F (190°C).",
        "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
        "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
        "Season with salt and pepper to taste.",
        "Top each toasted baguette slice with the tomato-basil mixture.",
        "Drizzle with balsamic glaze before serving.",
      ],
   
      imageUrl: "https://cdn.dummyjson.com/recipe-images/7.webp",
      category: "Appetizer",
    },
  ]);
    console.log(props.children);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
    localStorage.getItem("recipes") && setdata(JSON.parse(localStorage.getItem("recipes")));
  }, []);
  
  return (
    <Recipe.Provider value={{ data, setdata }}>
      {props.children}
    </Recipe.Provider>
  )
}

export default RecipeContext