const { auth } = require("../utils/auth");

module.exports = {
  Query: {
    users: async (_, __, context) => {
      return await context.prisma.user.findMany();
    },
    user: async (_, { id }, context) => {
      return await context.prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
    },
  },
  Mutation: {
    createUser: async (_, args, context) =>
      await context.prisma.user.create({ data: args }),
    updateUser: async (_, { id, data }, context) => {
      return await context.prisma.user.update({
        where: { id: parseInt(id) },
        data,
      });
    },
    destroyUser: async (_, { id }, context) => {
      return context.prisma.user.delete({
        where: { id: parseInt(id) },
      });
    },
  },
};
