import React, { useState } from 'react';
import { useRef } from 'react';
import Errors from './Errors';
import validate from './validator';


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
                <h3>My Profile</h3>
                <div className="form-row text-left">
                    <div className="col-md-6 mb-3">
                        <div className='row'>
                           

                        </div>
                        <div className='row'>
                            
                        </div>
                        <div className='row'>
                            
                            
                        </div>
                        <div className='row'>
                            
                        </div>
                    </div>
                    {/* <Errors  errors={user.username.errors}/> */}
                    <div className="col-md-6 mb-3">
                        
                        

                    </div>
                </div>
                
                <button className="btn btn-primary" type="submit">Save</button>
            </div>

        </form>
    </>
);
}

export default NewRecipeForm;