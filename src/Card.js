import React from 'react';
import {Link} from 'react-router-dom';

function Card(props) {

    return (
       
         <div className='col-md-3 mb-3 ml-3'>
            <div className="card text-white bg-dark card-main rounded-lg ml-4 mb-5" style={{ width: "18rem" }}>
                <img src={props.card.image} className="card-img-top mb-0 card-image" alt={props.card.linkname} />
                <div className="card-body mb-0">
                    <Link to={`/recipe/${props.card.id}`} className="card-link">{props.card.linkname}</Link>
                    <p className="card-text mb-0">Uploaded:{props.card.uploadedtime}</p>
                    {/* <p className="card-text mb-0">Viewed at:{props.card.lastupdatedtime}</p> */}
                    <p className="card-text">Views:{props.card.views}</p>
                </div>
                <div className="card-footer text-muted text-center">
                    <a href="#" className="btn btn-light">Edit</a>
                </div>
            </div>
        </div>
    )
}

export default Card;