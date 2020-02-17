// @ts-check

/**
 * @param { import('../generated/prisma-client').Post } parent
 * @param {{ prisma: import('../generated/prisma-client').Prisma }} context
 * @returns { Promise }
 */
const user = async (parent, _, context) => {
    console.log("Post.user.parent: %j", parent)
  
    const user = await context.prisma.post({ id: parent.id }).user();
  
    console.log("Post.user: %j", user)
    
    return user;
  };
  
  
  module.exports = {
    user,
  };