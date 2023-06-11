# MyStore

MyStore is a simple e-shop built by Angular. This page allows users to view list products, add products to cart and checkout. all functions are described below:
- List products
- Add products to cart
- Checkout products
- View product detail
- Delete product from cart
- Count cart total price    

## Install package
- run 'npm install'

## Run Code
- post: http://localhost:4200/
- run 'ng serve'

## Router
- Cart: '/cart'
- confirm information: '/confirm'
- list product: '/'
- product detail: '/product/:id'

## Folder structure
### component
- src/app/cart
- src/app/checkout-form
- src/app/nav-bar
- src/app/order-confirm
- src/app/product-detail
- src/app/product-item
- src/app/product-list
### data
- src/assets/data.json

### model
- src/model/product.ts

### service
- src/app/my-store.service.ts