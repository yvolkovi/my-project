import React, { useState } from 'react';
import { useRef } from 'react';
import Errors from './Errors';
import validate from './validator';


function MyProfile(props) {

    const [user, setUser] = useState(
        {
            username: { value: 'Jenia', required: true, pattern: /^(?:[^l]+|l(?:$|[^a]|a(?:$|[^l])))*$/, errors: [] },
            email: { value: 'yvolkovi@yahoo.com', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: [] },
            password: { value: 'goodbuy', required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, errors: [] },

        }

    );

    const onInputChange = (e) => {
        console.log(e.target.name, e.target.value);
        // const newErrors = validate(e.target.name, e.target.value, recipe[e.target.name].required, recipe[e.target.name].pattern);
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

        // setRecipe({
        //     ...recipe,
        //     [e.target.name]: {
        //         ...recipe[e.target.name],
        //         value: e.target.value,
        //         errors: newErrors
        //     }
        // })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        // for (const field in recipe) {

        //     const newErrors = validate(
        //         field,
        //         recipe[field].value,
        //         recipe[field].required,
        //         recipe[field].pattern
        //     );

        //     recipe[field] = {
        //         ...recipe[field],
        //         errors: newErrors
        //     };

        // }
        // setRecipe({ ...recipe });

        // const recipeToSend = Object.keys(recipe)
        //     .reduce((rc, prop) => {
        //         rc[prop] = recipe[prop].value;
        //         return rc;
        //     }, {});

        // console.log(recipeToSend);
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
                            <label htmlFor="validationDefault01">Username</label>
                            <input type="text" className="form-control" id="validationDefault01"
                                name="username"
                                defaultValue={user.username.value}
                                onBlur={onInputChange}
                            />
                        </div>




                    </div>
                </div>

                <button className="btn btn-primary" type="submit">Save</button>
            

        </form>
    </>
);
}

export default MyProfile;