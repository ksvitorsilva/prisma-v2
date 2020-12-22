import { Router } from "express";
import users from "./resolvers/user";

const routes = Router();
routes.use(users);

export default routes;
