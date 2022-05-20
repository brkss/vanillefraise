import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IRoute } from "../utils/types/Route";
import { getToken } from "../utils/token/token";

interface Props {
  route: IRoute;
}

export const GuardRoute: React.FC<Props> = ({ route }) => {
  if (route.protected && !getToken()) return <Redirect to={"/login"} />;

  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props: RouteComponentProps) => {
        return <route.component {...route.name} {...route.props} {...props} />;
      }}
    />
  );
};
