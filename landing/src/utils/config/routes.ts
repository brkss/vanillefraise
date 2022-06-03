import { IRoute } from '../types';
import { Home } from '../../pages';

export const routes : IRoute[] = [
  {
    name: "Home",
    component: Home,
    path: "/"
  }
]
