import { AppDataSource } from './DataSource';
import { Order } from './entity/Order';

export const resolvers = {
    Query: {
        orders: async () => AppDataSource.getRepository(Order).find(),
    },
    Order: {
        product(order: Order) {
            return { __typename: 'Product', id: order.productId };
        },
    },
    Mutation: {
        createOrder: async (_: any, args: { productId: string; quantity: number }) => {
            const orderRepo = AppDataSource.getRepository(Order);
            const newOrder = orderRepo.create({ productId: args.productId, quantity: args.quantity });
            await orderRepo.save(newOrder);
            return newOrder;
        },
    },
};