import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { getRecipe } from './api/recipes';

function RecipeDetails() {
    const { params: { id } } = useRouteMatch('/recipe/:id');
    console.log(id);
    const recipe = getRecipe(id);
    console.log(recipe);
    return (
        <div className='container'>
            <h1>Recipe's Details</h1>
            <div className='row'>
                <div className='col-md-4'>
                    {/* <img src={"/images/pancake.jfif"} alt="Recipe's Details"></img> */}
                    <img src={recipe.image} alt="Recipe's Details"></img>
                </div>
                <div className='col-md-8'>
                    <div className='row mb-3'>
                        <div className='col-md-4 mr-1 font-weight-bold'>Name:  </div>
                        <div className='col-md-6 ml-1'>{recipe.linkname}</div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-4 mr-1 font-weight-bold'>Original's Site Name:  </div>
                        <div className='col-md-6 ml-1'>{recipe.sitename}</div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-4 mr-1 font-weight-bold'>Original's Site Link:  </div>
                        <div className='col-md-6 ml-1'>{recipe.sitelink}</div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-4 mr-1 font-weight-bold'>Category:  </div>
                        <div className='col-md-6 ml-1'>{recipe.category}</div>
                    </div>
                    <div className='row mb-3' >
                        <div className='col-md-4 mr-1 font-weight-bold'> Description: </div>
                        <div className='col-md-4 mr-1'>{recipe.description} </div>
                    </div >
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-2'>
                    <button type="button" className="btn btn-dark">Back</button>
                </div>
            </div>
        </div>

    );

}

export default RecipeDetails;