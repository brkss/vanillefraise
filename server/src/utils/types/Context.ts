import { Response, Request } from "express";

export interface IContext {
  req: Request;
  res: Response;
  payload: any;
}
