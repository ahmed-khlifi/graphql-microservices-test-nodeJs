import { AppDataSource } from './DataSource';
import { User } from './entity/User';

export const resolvers = {
    Query: {
        users: async () => AppDataSource.getRepository(User).find(),
    },
    User: {
        __resolveReference(user: { id: string }) {
            return AppDataSource.getRepository(User).findOneBy({ id: user.id });
        },
    },
};