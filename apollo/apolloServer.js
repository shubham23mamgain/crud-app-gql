import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { carTypeDefs } from "../graphql/typedefs/carTypeDefs.js";
import { carResolvers } from "../graphql/resolvers/carResolver.js";
import { json } from "express";

export async function startApolloServer(app) {
  const typeDefs = [carTypeDefs];
  const resolvers = [carResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.start();

  app.use("/graphql", json(), expressMiddleware(apolloServer));
}
