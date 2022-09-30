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

  return (
    <div>
      {store.characters.map((character) => {
        return <Characters character={character} />;
      })}

      {store.starships.map((starship) => {
        return <Starships starship={starship} />;
      })}

      {store.planets.map((planet) => {
        return <Planets planet={planet} />;
      })}
    </div>
  );
};
