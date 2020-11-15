import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            {/* <a className="navbar-brand" href="#">Recipes' Book</a> */}
            <Link className="navbar-brand" to="/">Recipes' Book</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='container>'>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/all-recipes">
                                All Recipes <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-recipes">My Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new-recipe">Add New recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-profile">My Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;