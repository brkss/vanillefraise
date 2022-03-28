import React from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./utils/config/routes";

export const Application: React.FC = () => {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              exact={route.exact}
              path={route.path}
              render={(props: RouteComponentProps) => (
                <route.component {...route.name} {...route.props} {...props} />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};
