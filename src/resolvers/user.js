module.exports = {
  Query: {
    users: async (_, __, context) => await context.prisma.user.findMany(),
  },
  Mutation: {
    createUser: async (_, args, context) =>
      await context.prisma.user.create({ data: args }),
  },
};
