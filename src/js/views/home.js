import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/Characters";

export const Home = () => {
  const { store } = useContext(Context);
  console.log(store.characters);
  return (
    <div>
      {store.characters.map((item) => {
        return <Characters item={item} />;
      })}
    </div>
  );
};
