const { mergeTypeDefs } = require("@graphql-tools/merge");
const userTypeDefs = require("../typeDefs/user");

const typeDefs = mergeTypeDefs([userTypeDefs]);

module.exports = typeDefs;
