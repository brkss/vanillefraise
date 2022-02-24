import { IRoute } from "../types/Route";
import { Home, CreateRecipe } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    name: "Create Recipe",
    exact: true,
    path: "/create-recipe",
    component: CreateRecipe,
  },
];
