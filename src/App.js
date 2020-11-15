
import React, { useState } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import NewRecipeForm from './NewRecipeForm';
import RecipesPage from './RecipesPage';
import RecipesPage2 from './RecipesPage2';
import ExistingRecipe from './ExistingRecipe';
import MyProfile from './MyProfile';
import RecipeDetails from './RecipeDetails';

import {getAllRecipes} from './api/recipes';


function App() {

  //for Card
  const [recipes, setRecipes] = useState(
    getAllRecipes()
  );


  return (

    <BrowserRouter>
      <Navbar />
      <Route path="/" exact={true}>
        <RecipesPage2 title="All Reciepes" recipes={recipes} />
      </Route>
      <Route path="/all-recipes">
        <RecipesPage2 title="All Reciepes" recipes={recipes} />
      </Route>
      <Route path="/my-recipes">
        <RecipesPage title="My Reciepes" recipes={recipes} />
      </Route>
      <Route path="/new-recipe">
        <NewRecipeForm />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
      <Route path="/recipe/:id">
        <RecipeDetails />
      </Route>
    </BrowserRouter>
    );
}

export default App;
