import { IRoute } from "../types";
import { Home, RequestResetPassword } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Reset Passowrd",
    component: RequestResetPassword,
    path: "/request-reset-password",
  },
];
