import React from "react";

export const Planets = (props) => {
  return (
    <div className="card" style={{width: "18rem", display: 'inline-flex'}}>
      <img className="card-img-top" src="https://picsum.photos/400/200" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">
            {props.planet.name}
            
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
