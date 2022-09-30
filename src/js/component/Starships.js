import React from "react";

export const Starships = (props) => {
  return (
    <div className="card" style={{ width: "18rem", display: "inline-flex" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/400/200"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.starship.name}</h5>
        <p className="card-text">length: {props.starship.length}</p>
        <p className="card-text">crew: {props.starship.crew}</p>
        <p className="card-text">passengers: {props.starship.passengers}</p>
        <a href="#" className="btn btn-primary">
        learn more
        </a>
      </div>
    </div>
  );
};
