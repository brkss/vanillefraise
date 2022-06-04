import { IRoute } from "../types";
import { Home, ResetPassword } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Reset Passowrd",
    component: ResetPassword,
    path: "/reset-password",
  },
];
