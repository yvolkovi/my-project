import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

import {getRecipe} from './api/recipes';

function RecipeDetails() {
    const {params: {id}} = useRouteMatch('/recipe/:id');
    console.log(id);
    const recipe = getRecipe(id);
    console.log(recipe);
    return (
        <div className='col-md-3 mb-3 ml-3'>
        <div className="card border-secondaryprimary text-white bg-dark" style={{ width: "18rem" }}>
            <img src={recipe.image} className="card-img-top mb-0" alt="..." />
            <div className="card-body mb-0">
                <a href="#" className="card-link">{recipe.linkname}</a>
                <p className="card-text mb-0">Uploaded:{recipe.uploadedtime}</p>
                <p className="card-text mb-0">Viewed at:{recipe.lastupdatedtime}</p>
                <p className="card-text">Views:{recipe.views}</p>
            </div>
            <div className="card-footer text-muted text-center">
                <a href="#" className="btn btn-light">Edit</a>
            </div>
        </div>
    </div>
    );

}

export default RecipeDetails;