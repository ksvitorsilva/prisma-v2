import { PromiseReturnType, UserCreateInput } from "@prisma/client";
import prisma from "../../client";

export type TCreateUser = PromiseReturnType<typeof createUser>;

async function createUser(data: UserCreateInput) {
  const users = await prisma.user.create({ data });
  return users;
}

export default createUser;
