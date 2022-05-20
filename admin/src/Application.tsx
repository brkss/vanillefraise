import React from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./utils/config/routes";
import { GuardRoute } from "./components/GuardRoute";

export const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, key) =>
            route.protected ? (
              <GuardRoute route={route} key={key} />
            ) : (
              <Route
                key={key}
                exact={route.exact}
                path={route.path}
                render={(props: RouteComponentProps) => {
                  return (
                    <route.component
                      {...route.name}
                      {...route.props}
                      {...props}
                    />
                  );
                }}
              />
            )
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
};
