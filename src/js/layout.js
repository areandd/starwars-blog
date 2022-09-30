import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";

import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

import { SingleChar } from "./views/SingleChar";
import { SingleShip } from "./views/SingleShip";
import { SinglePlan } from "./views/SinglePlan";

const Layout = () => {
  const { store } = useContext(Context);
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single-char">
              {store.characters.map((character) => {
                return <SingleChar character={character} />;
              })}
            </Route>
            <Route exact path="/single-ship">
              {store.starships.map((starship) => {
                return <SingleShip starship={starship} />;
              })}
            </Route>
            <Route exact path="/single-plan">
              {store.planets.map((planet) => {
                return <SinglePlan planet={planet} />;
              })}
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
