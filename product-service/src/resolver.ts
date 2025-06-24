import { AppDataSource } from './DataSource';
import { Product } from './entity/Product';

export const resolvers = {
    Query: {
        products: async () => AppDataSource.getRepository(Product).find(),
    },
    Product: {
        __resolveReference(product: { id: string }) {
            return AppDataSource.getRepository(Product).findOneBy({ id: product.id });
        },
    },
};