import React from "react";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./utils/config/routes";
import { GuardRoute } from "./components/GuardRoute";
import { Loading } from "./components";
import { URI } from "./utils/config/defaults";
import { setToken } from "./utils/token/token";

export const Application: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${URI}/refresh_admin_token`, {
      credentials: "include",
      method: "POST",
    }).then(async (res) => {
      const data = await res.json();
      if (data.status === true && data.token) {
        //setToken(data.token);
      }
      console.log("refresh token result ? ", data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

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
