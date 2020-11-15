import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <a className="navbar-brand" href="#">Recipes' Book</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='container>'>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">All Recipes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add New recipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;