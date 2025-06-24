import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './schema';
import { AppDataSource } from './DataSource';
import { resolvers } from './resolver';
import { Order } from './entity/Order';

async function start() {
    await AppDataSource.initialize();

    const app = express();
    const server = new ApolloServer({ schema: buildSubgraphSchema([{ typeDefs, resolvers }]) });
    await server.start();
    server.applyMiddleware({ app: app as any });

    app.listen(process.env.PORT || 3102, () => {
        console.log(`Service ready at http://localhost:${3102}/graphql`);
    });
}

start();