import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './schema';
import { AppDataSource } from './DataSource';
import { resolvers } from './resolver';
import { User } from './entity/User';

async function start() {
    await AppDataSource.initialize();
    // seed users
    const userRepo = AppDataSource.getRepository(User);
    await userRepo.save([
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' }
    ]);

    const app = express();
    const server = new ApolloServer({ schema: buildSubgraphSchema([{ typeDefs, resolvers }]) });
    await server.start();
    server.applyMiddleware({ app: app as any });

    app.listen(process.env.PORT || 3101, () => {
        console.log(`Service ready at http://localhost:${3101}/graphql`);
    });
}

start();