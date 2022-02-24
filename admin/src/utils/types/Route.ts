

export interface IRoute {
  name: string;
  component: any;
  path: string;
  exact: boolean;
  props?: any;
}
