# GraphQL Federation Demo

> **Demo project**—For testing purposes

**Services & Ports**  
- Users: 3101   
- Products: 3102   
- Orders: 3103   
- Gateway: 4000   

**Database**  
- Each service uses SQLite (in-memory by default) via TypeORM.  
- Data resets on restart; no external setup required.

**Quick Start**

1. Install deps in each folder:  
   ```bash
   npm install

2. start all services
    ```bash 
    npm  start

3. start gateway
    ```bash 
    cd gateway && npm start


 4. Open GraphQL at http://localhost:4000/graphql

 ( some demo data will be seeded directly open project lunch, check `index.ts` of `user-service` & `product-service`)

**Playground**
 
 *get orders with products*
```query {
  orders {
    id
    quantity
    product {
      name
      price
    }
  }
}
```

*get products*
```
query {
  products {
    id,
    name,
    price
  }
}
```

*place an order*
```mutation {
  createOrder(productId: "product ID", quantity: 5) {
    id
    quantity
    product {
      name
      price
    }
  }
}
```
