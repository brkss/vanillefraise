import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IRoute } from "../utils/types/Route";
import { getToken } from "../utils/token/token";

interface Props {
  route: IRoute;
}

export const GuardRoute: React.FC<Props> = ({ route }) => {
  /*
  if (getToken() === "") {
    return <Redirect to={"/login"} />;
  }
  */

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props: RouteComponentProps) => {
        console.log("rendred from GUARD : ", route.name);
        return (
          <route.component {...props} {...route.props} name={route.name} />
        );
      }}
    />
  );
};
