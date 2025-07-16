const { PrismaClient } = require("@prisma/client");
const { getUserByToken } = require("./utils/auth");

const prisma = new PrismaClient();

const context = ({ req }) => {
  const token = req.headers.authorization || "";

  const userId = getUserByToken(token);

  return {
    prisma,
    userId,
  };
};

module.exports = context;
