import React from "react";
import { IRoute } from "../utils/types/Route";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { getAccessToken } from "../utils/token/token";

interface Props {
  route: IRoute;
}

export const GuardRoute: React.FC<Props> = ({ route }) => {
  if (!getAccessToken()) {
    console.log("access token => ", getAccessToken());
    return <Redirect to={"/login"} />;
  }

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props: RouteComponentProps) => {
        return <route.component {...route.props} {...route.name} {...props} />;
      }}
    />
  );
};
