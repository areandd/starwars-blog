import React from "react";

export const Planets = (props) => {
  return (
    <div className="card" style={{ width: "18rem", display: "inline-flex" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/400/200"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
        <p className="card-text">gravity: {props.planet.gravity}</p>
        <p className="card-text">climate: {props.planet.climate}</p>
        <p className="card-text">terrain: {props.planet.terrain}</p>
        <a href="#" className="btn btn-primary">
          learn more
        </a>
      </div>
    </div>
  );
};
