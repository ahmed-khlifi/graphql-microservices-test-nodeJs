import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';

async function startGateway() {
    const app = express();
    const gateway = new ApolloGateway({
        serviceList: [
            { name: 'user', url: 'http://localhost:3101/graphql' },
            { name: 'product', url: 'http://localhost:3102/graphql' },
            { name: 'order', url: 'http://localhost:3103/graphql' },
        ],
    });

    const server = new ApolloServer({ gateway });
    await server.start();
    server.applyMiddleware({ app: app as any });

    app.listen(4000, () => {
        console.log('Gateway ready at http://localhost:4000/graphql');
    });
}

startGateway();