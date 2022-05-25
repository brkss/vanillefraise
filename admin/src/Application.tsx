import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { routes } from "./utils/config/routes";
import { URI } from "./utils/config/defaults";
import { getToken, setToken } from "./utils/token/token";
import { Loading } from './components'


export const Application: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${URI}/refresh_admin_token`, {
      credentials: "include",
      method: "POST",
    }).then(async (res) => {
      const data = await res.json();
      if (data.status === true && data.token) {
        setToken(data.token);
      }
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
              getToken() ? (
                <Route
                  key={key}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps) => {
                    return (
                      <route.component
                        {...props}
                        {...route.props}
                        name={route.name}
                      />
                    );
                  }}
                />
              ) : (
                <Redirect to={"login"} />
              )
            ) : (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps) => {
                  console.log("rendered from Application => ", route.name);
                  if (getToken() === "" && route.protected)
                    return <Redirect to={"/login"} />;
                  return (
                    <route.component
                      {...props}
                      {...route.props}
                      name={route.name}
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
