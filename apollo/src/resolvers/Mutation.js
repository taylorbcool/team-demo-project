// @ts-check

/**
 * @param {{ data: import('../generated/prisma-client').UserCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').UserPromise }
 */
const createUser = (_, args, context) => {
  console.log("createUser.args: %j", args)

  const user = context.prisma.createUser(args.data);  

  return user;
};

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').UserPromise }
 */
const deleteUser = (_, args, context) => {
  console.log("deleteUser.args: %j", args)

  const user = context.prisma.deleteUser(args.where);  

  return user;
};

/**
 * @param {{ where: import('../generated/prisma-client').UserWhereUniqueInput, data: import('../generated/prisma-client').UserUpdateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').UserPromise }
 */
const updateUser = (_, args, context) => {
  console.log("updateUser.args: %j", args)

  const user = context.prisma.updateUser(args);  

  return user;
};



module.exports = {
  createUser,
  deleteUser,
  updateUser
};
