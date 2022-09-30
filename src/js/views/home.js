import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/Characters";
import { Starships } from "../component/Starships";
import { Planets } from "../component/Planets";

export const Home = () => {
  const { store } = useContext(Context);

  console.log(store.characters);
  console.log(store.starships);
  console.log(store.planets);

  const divStyle = {
    overflowY: "scroll",
    position: "relative",
  };

  return (
    <div>
      <break />
      <h1>Characters</h1>

      <div className="container-fluid py-2" styles={divStyle}>
        <div className="d-flex flex-row flex-nowrap">
          {store.characters.map((character) => {
            return <Characters character={character} />;
          })}
        </div>
      </div>

      <br />
      <h1>Starships</h1>

      <div className="container-fluid py-2" >
        <div className="d-flex flex-row flex-nowrap" styles={{overflow: "auto"}}>
          {store.starships.map((starship) => {
            return <Starships starship={starship} />;
          })}
        </div>
      </div>

      <br />
      <h1>Planets</h1>

      <div className="container-fluid py-2" styles={divStyle}>
        <div className="d-flex flex-row flex-nowrap">
          {store.planets.map((planet) => {
            return <Planets planet={planet} />;
          })}
        </div>
      </div>
    </div>
  );
};
