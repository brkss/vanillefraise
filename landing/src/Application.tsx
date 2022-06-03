import React from "react";
import { Home, Survey } from "./pages";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { routes } from './utils/config/routes';

export const Application: React.FC = () => {

  return (
  <BrowserRouter>
    <Router>
        {
          routes.map((route, key) => (
            <Route key={key} path={route.path} element={<route.component name={route.name} />} />
          ))
        }
    </Router>
  </BrowserRouter>
  );
  //return <Home />;
};
