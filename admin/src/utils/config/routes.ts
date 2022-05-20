import { IRoute } from "../types/Route";
import { Home, CreateRecipe, Resourses, Login } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true,
    protected: true,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
    protected: false,
  },
  {
    name: "Create Recipe",
    exact: true,
    path: "/create-recipe",
    component: CreateRecipe,
    protected: true,
  },
  {
    name: "Resourses",
    exact: true,
    component: Resourses,
    path: "/resourses",
    protected: true,
  },
];
