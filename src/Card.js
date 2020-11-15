import React from 'react';

function Card(props) {

    return (
        <div className='col-md-3 mb-3 ml-3'>
            <div className="card border-secondaryprimary text-white bg-dark" style={{ width: "18rem" }}>
                <img src={props.card.image} className="card-img-top mb-0" alt="..." />
                <div className="card-body mb-0">
                    <a href="#" className="card-link">{props.card.linkname}</a>
                    <p className="card-text mb-0">Uploaded at:{props.card.uploadedtime}</p>
                    <p className="card-text mb-0">Last viewed at:{props.card.lastupdatedtime}</p>
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