import React, { useState } from 'react';
import { useRef } from 'react';
import Errors from './Errors';
import validate from './validator';
import Navbar from './Navbar';

function NewRecipeForm(props) {

    const [recipe, setRecipe] = useState(
        {
            recipename: { value: '', required: true, errors: [] },
            originalsitename: { value: '', required: false, errors: [] },
            originalsitelink: { value: '', required: false, pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, errors: [] },
            category: { value: '', required: false, errors: [] },
            image: { value: '', required: false, errors: [] },
            description: { value: '', required: true, errors: [] },

        }
    );

    const onInputChange = (e) => {
        console.log(e.target.name, e.target.value);
        const newErrors = validate(e.target.name, e.target.value, recipe[e.target.name].required, recipe[e.target.name].pattern);
        // if (recipe[e.target.name].required) {
        //     if (!recipe[e.target.name].value) {
        //         newErrors.push(`${e.target.name} field is required`);
        //     }
        // }
        // if (recipe[e.target.name].pattern) {
        //     const regex = recipe[e.target.name].pattern;
        //     if (!regex.test(e.target.value)) {
        //         newErrors.push(`${e.target.name} is invalid`);
        //     }
        // }
    
        setRecipe({
            ...recipe,
            [e.target.name]: {
                ...recipe[e.target.name],
                value: e.target.value,
                errors: newErrors
            }
        })
    
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        for (const field in recipe) {
        
            const newErrors = validate(
                field,
                recipe[field].value,
                recipe[field].required,
                recipe[field].pattern
            );

            recipe[field] = {
                ...recipe[field],
                errors: newErrors
            };
            
        }
        setRecipe({...recipe});

        const recipeToSend = Object.keys(recipe)
                            .reduce((rc, prop) => {
                                rc[prop] = recipe[prop].value;
                                return rc;
                            }, {});

        console.log(recipeToSend);
    }
 

//to display image after selecting
const [image, setImage] = useState("");
const imageRef = useRef(null);

function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
        const imageFile = e.target.files[0];

        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            setResult(e.target.result);
        });

        reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
}

const { result, uploader } = useDisplayImage();

return (
    <>
    
        <form onSubmit={onSubmit}>
            <div className="alert alert-secondary text-center" role="alert">
                <h3>New Recipe</h3>
                <div className="form-row text-left">
                    <div className="col-md-6 mb-3">
                        <div className='row'>
                            <div className='col-md-10'>
                                <label htmlFor="recipenameid">Recipe's Name</label>
                                <input type="text" className="form-control" id="recipenameid"
                                    name="recipename"
                                    defaultValue={recipe.recipename.value}
                                    onBlur={onInputChange}
                                />
                                {
                                    <Errors errors={recipe.recipename.errors} />
                                }
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-10'>
                                <label htmlFor="sitenameid">Original Site's Name</label>
                                <input type="text" className="form-control" id="sitenameid"
                                    name="originalsitename"
                                    defaultValue={recipe.originalsitename.value}
                                    onBlur={onInputChange}
                                />
                                {
                                    <Errors errors={recipe.originalsitename.errors} />
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-10'>
                                <label htmlFor="originasitelinkid">Original Site's Link</label>
                                <textarea className="form-control" id="originasitelinkid" aria-label="With textarea"
                                    name="originalsitelink"
                                    defaultValue={recipe.originalsitelink.value}
                                    onBlur={onInputChange}
                                ></textarea>
                                {
                                    <Errors errors={recipe.originalsitelink.errors} />
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-10'>
                                <label htmlFor="categoryid">Category</label>
                                <select className="custom-select" id="categotyid"
                                    name="category"
                                    defaultValue={recipe.category.value}
                                    onBlur={onInputChange}
                                >
                                    <option value="">Select Category</option>
                                    <option value="kids">Kids</option>
                                    <option value="breakfasts">Breakfasts</option>
                                    <option value="soups">Soups</option>
                                    <option value="cakes">Cakes</option>
                                </select>
                                {
                                    <Errors errors={recipe.category.errors} />
                                }
                            </div>
                        </div>
                    </div>
                    {/* <Errors  errors={user.username.errors}/> */}
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="choosefileid">Choose a picture:</label>
                            <input type="file" className="form-control-file" id="choosefileid"
                             name="image"
                             defaultValue={recipe.image.value}
                             onBlur={onInputChange}
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                    uploader(e);
                                }} />
                        </div>
                        <div className='row'>
                            {result && <img ref={imageRef} src={result} alt="" />}
                        </div>
                        {
                            <Errors errors={recipe.image.errors} />
                        }

                    </div>
                </div>
                <div className="form-row text-left">
                    <div className='col-md'>
                        <label htmlFor="descriptionid">Describe the Recipe</label>
                        <textarea className="form-control" id="descriptionid" aria-label="With textarea" rows="3"
                            name="description"
                            defaultValue={recipe.description.value}
                            onBlur={onInputChange}
                        ></textarea>
                        {
                            <Errors errors={recipe.description.errors} />
                        }
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Save</button>
            </div>

        </form>
    </>
);
}

export default NewRecipeForm;