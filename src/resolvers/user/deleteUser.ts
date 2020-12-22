import { PromiseReturnType } from "@prisma/client";
import prisma from "../../client";

export type TDeleteUser = PromiseReturnType<typeof deleteUser>;

async function deleteUser(id:string) {
  const users = await prisma.user.delete({
    where: {
      id,
    },
  });
  return users;
}

export default deleteUser;
