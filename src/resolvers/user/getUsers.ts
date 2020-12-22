import { PromiseReturnType } from "@prisma/client";
import prisma from "../../client";

export type TGetUsers = PromiseReturnType<typeof getUsers>;

async function getUsers() {
  const users = await prisma.user.findMany({ include: { profile: true } });
  return users;
}

export default getUsers;
