import React, { useContext } from "react";
import { Context } from '../store/appContext';
import Card from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  return (
    <div>
      {store.characters.map((item, index) => {
        return (
          <Card item={item}/>
        )

      })}
    </div>
  );
};
