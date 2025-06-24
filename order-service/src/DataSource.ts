import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Order } from './entity/Order';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    logging: false,
    entities: [Order],
});