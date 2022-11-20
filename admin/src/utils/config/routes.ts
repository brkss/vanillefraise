import { IRoute } from "../types/Route";
import {
  Login,
  RecipeCategory,
  UsersList,
  Home,
  CreateRecipe,
  Resourses,
  RecipeList,
} from "../../pages";
import { RecipeReports } from "../../pages/Recipe/Reports";
export const routes: IRoute[] = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    exact: true,
    protected: false,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true,
    protected: true,
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
  {
    name: "Recipe Category",
    exact: true,
    component: RecipeCategory,
    path: "/recipe-category",
    protected: true,
  },
  {
    name: "Recipes List",
    path: "/recipes",
    component: RecipeList,
    exact: true,
    protected: true,
  },
  {
    name: "Recipe Reports",
    path: "/recipes-reports",
    component: RecipeReports,
    exact: true,
    protected: true,
  },
  {
    name: "Users",
    exact: true,
    path: "/users",
    component: UsersList,
    protected: true,
  },
];
