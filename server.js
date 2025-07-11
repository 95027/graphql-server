const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const typeDefs = require("./src/typeDefs");
const resolvers = require("./src/resolvers");
const context = require("./src/context");

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers, context });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

startServer();
