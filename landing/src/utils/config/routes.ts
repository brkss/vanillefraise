import { IRoute } from "../types";
import { Home, RequestResetPassword, ResetPassword } from "../../pages";

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
  {
    name: "Reset Password",
    component: ResetPassword,
    path: "/rp/:token",
  },
];
