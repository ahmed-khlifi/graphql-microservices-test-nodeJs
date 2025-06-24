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

![image](https://github.com/user-attachments/assets/5c091bf0-b1da-4542-8f49-84d4740b4237)


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

![image](https://github.com/user-attachments/assets/947f8cda-9a94-462d-b127-b2feb2870e98)

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

![image](https://github.com/user-attachments/assets/4de8db3d-7d74-4779-bbdf-d5fd7fe3563d)

