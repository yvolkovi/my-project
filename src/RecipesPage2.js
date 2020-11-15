
import React, { useState } from 'react';
import Card from './Card';

function RecipesPage2(props) {

  return (

    <>     
      <div className='container'>
        <h1>{props.title}</h1>
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
            props.recipes.map(card => <Card key={card.linkname} card={card}/>)
          }
          
        </div>

      </div>




    </>
  );
}

export default RecipesPage2;
