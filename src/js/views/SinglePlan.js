import React from 'react'

export const SinglePlan = (props) => {
  return (
    <div className="card" style={{ width: "75%", display: "inline-flex", justifySelf:"center", margin:"10px" }}>
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
      </div>
    </div>
  );
};

