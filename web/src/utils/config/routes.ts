import { IRoute } from "../types/Route";
import {
  Home,
  Login,
  Dashboard,
  ForgetPassword,
  ResetPassword,
  Checkout,
} from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    name: "Forget Password",
    path: "/forget-password",
    exact: true,
    component: ForgetPassword,
  },
  {
    name: "Reset Password",
    path: "/reset-password/:token",
    exact: true,
    component: ResetPassword,
  },
  /*
   * DASHBOARD
   */
  {
    name: "Checkout",
    path: "/checkout",
    exact: true,
    component: Checkout,
    protected: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    protected: true,
  },
];
