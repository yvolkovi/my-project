
import './App.css';
import React, { useState } from 'react';

import Navbar from './Navbar';
import NewRecipeForm from './NewRecipeForm';
import RecipesPage from './RecipesPage';
import ExistingRecipe from './ExistingRecipe';
import MyProfile from './MyProfile';


function App() {

  //for Card
  const [cards, setCards] = useState(
    [
      {id:1, image: './images/shakshuka.jfif', linkname: 'Shakshuka', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 6},
      {id:2,image: './images/shakshuka.jfif', linkname: 'Shakshuka1', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 9},
      {id:3,image: './images/shakshuka.jfif', linkname: 'Shakshuka2', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 4},
      {id:4,image: './images/shakshuka.jfif', linkname: 'Shakshuka3', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 0},
      {id:5,image: './images/shakshuka.jfif', linkname: 'Shakshuka4', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2}
    ].sort((card1, card2) => card2.views - card1.views)
  );

  const recipesName=["All Recipes", "My Recipes"];

  return (

    <>
      <Navbar />
      <MyProfile />

      {/* <RecipesPage name={recipesName[1]} recipes={cards}/> */}
  {/* <ExistingRecipe /> */}


    </>
  );
}

export default App;
