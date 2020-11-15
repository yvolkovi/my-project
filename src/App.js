
import './App.css';
import React, { useState } from 'react';

import Navbar from './Navbar';
import NewRecipeForm from './NewRecipeForm';
import RecipesPage from './RecipesPage';
import ExistingRecipe from './ExistingRecipe';


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
      <RecipesPage name={recipesName[1]} recipes={cards}/>
      {/* <div className='container'>
        <h1>All Recipes</h1>
        <div className='row mb-2'>
          <div className='col-md-6'>
            Show Recipes
          </div>
          <div className='col-md-6'>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="showrecipes" id="mostpopularid" value="option1" />
              <label className="form-check-label" htmlFor="mostpopularid">Most Popular</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="showrecipes" id="newestid" value="option2" />
              <label className="form-check-label" htmlFor="newestid">The Newest</label>
            </div>
          </div>
        </div>
        <div className='row mb-2'>
          <div className="col-md-6">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search for a recipe" />
          </div>
        </div>
        <div className='row mb-2'>
          <div className="col-md-6">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search by ingredient" />
          </div>
          <div className='col-md-6'>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="searchbyingredient" id="atleastoneid" value="option1" />
              <label className="form-check-label" htmlFor="atleastoneid">At least one</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="searchbyingredient" id="everyoneid" value="option2" />
              <label className="form-check-label" htmlFor="everyoneid">EveryOne</label>
            </div>
          </div>
        </div>
        <br></br>

        <div className='row '>
          {
            cards.map(card => <Card key={card.linkname} card={card}/>)
          }
          
        </div>

      </div> */}

<ExistingRecipe />


    </>
  );
}

export default App;
