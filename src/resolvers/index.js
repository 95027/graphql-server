const merge  = require("lodash.merge");

const userResolvers = require("../resolvers/user");

const resolvers = merge({}, userResolvers);

module.exports = resolvers;
