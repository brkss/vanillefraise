import { IRoute } from "../types/Route";
import { Home, CreateRecipe, Resourses, Login } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    name: "Create Recipe",
    exact: true,
    path: "/create-recipe",
    component: CreateRecipe,
  },
  {
    name: "Resourses",
    exact: true,
    component: Resourses,
    path: "/resourses",
  },
];
