import React from "react";

export const Characters = (props) => {
  return (
    <div className="card" style={{ width: "18rem", display: "inline-flex" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/400/200"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">gender: {props.character.gender}</p>
        <p className="card-text">mass: {props.character.mass}</p>
        <p className="card-text">home: {props.character.height}</p>
        <a href="#" className="btn btn-primary">
        learn more
        </a>
      </div>
    </div>
  );
};
