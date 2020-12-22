import { Router } from "express";
import getUsers, { TGetUsers } from "./getUsers";
import createUser, { TCreateUser } from "./createUser";
import deleteUser, { TDeleteUser } from "./deleteUser";

const users = Router();

users.get(`/users`, async (req, res) => {
  const result: TGetUsers = await getUsers();
  res.json(result);
});

users.post(`/users`, async (req, res) => {
  const result: TCreateUser = await createUser(req.body);
  res.json(result);
});

users.delete(`/users/:id`, async (req, res) => {
  const result: TDeleteUser = await deleteUser(req.params.id);
  res.json(result);
});

export default users;
