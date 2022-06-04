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

export const Application: React.FC<any> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            exact
            render={() => <route.component name={route.name} />}
          />
        ))}
        <Route />
      </Switch>
    </BrowserRouter>
  );
  //return <Home />;
  //return <Home />;
};
