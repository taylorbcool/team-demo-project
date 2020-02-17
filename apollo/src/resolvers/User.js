// @ts-check

/**
 * @param { import('../generated/prisma-client').User } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const posts = async (parent, _, context) => {
  console.log("User.posts.parent: %j", parent)

  const post = await context.prisma.user({ id: parent.id }).posts();

  console.log("User.posts: %j", post)
  
  return post;
};


module.exports = {
  posts,
};