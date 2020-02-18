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

/**
 * @param {{ data: import('../generated/prisma-client').PostCreateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').PostPromise }
 */
const createPost = (_, args, context) => {
  console.log("createPost.args: %j", args)

  const post = context.prisma.createPost(args.data);  

  return post;
};

/**
 * @param {{ where: import('../generated/prisma-client').PostWhereUniqueInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').PostPromise }
 */
const deletePost = (_, args, context) => {
  console.log("deletePost.args: %j", args)

  const post = context.prisma.deletePost(args.where);  

  return post;
};

/**
 * @param {{ where: import('../generated/prisma-client').PostWhereUniqueInput, data: import('../generated/prisma-client').PostUpdateInput }} args
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { import('../generated/prisma-client').PostPromise }
 */
const updatePost = (_, args, context) => {
  console.log("updatePost.args: %j", args)

  const post = context.prisma.updatePost(args);  

  return post;
};


module.exports = {
  createUser,
  deleteUser,
  updateUser,
  createPost,
  deletePost,
  updatePost
};
