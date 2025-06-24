import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './schema';
import { AppDataSource } from './DataSource';
import { resolvers } from './resolver';
import { Product } from './entity/Product';

async function start() {
    await AppDataSource.initialize();
    // Seed Products
    const productRepo = AppDataSource.getRepository(Product);
    await productRepo.save([
        { name: 'Widget', price: 9.99, },
        { name: 'Gadget', price: 19.99 }
    ]);
    const app = express();
    const server = new ApolloServer({ schema: buildSubgraphSchema([{ typeDefs, resolvers }]) });
    await server.start();
    server.applyMiddleware({ app: app as any });

    app.listen(process.env.PORT ?? 3103, () => {
        console.log(`Service ready at http://localhost:${3103}/graphql`);
    });
}

start();