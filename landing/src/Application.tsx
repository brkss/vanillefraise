import React from "react";
import { Home } from "./pages";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./utils/config/routes";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

export const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route
            path={route.path}
            exact={true}
            //render={(props: RouteComponentProps) => <Home {...props} />}
          >
            <Home />
          </Route>
        ))}
        {/*<Route path={"/"} render={() => <Home />} />*/}
      </Switch>
    </BrowserRouter>
  );

  //return <Home />;
};
