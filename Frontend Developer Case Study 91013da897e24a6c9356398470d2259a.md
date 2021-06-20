# Frontend Developer Case Study

# Description

Create an application in React for a small online store. 
The use of TypeScript is optional.

1. The app should include 3 pages: `Products`, `Cart` and `Order` 
(please use the prepared HTML templates from the Asset Files below).
    - `Products`
        - The URL is `/products`
        - The page contains a list of products which can be added to the cart.
    - `Cart`
        - The page should display products in the shopping cart.
        - It should also display the order total and tax amounts.
        - The order can be updated by adjusting the product quantity or removing a product
        - After clicking the `Send order` button:
            1. The content of the shopping cart should be displayed in the console.
            2. The shopping cart should be empty.
            3. The customer should be redirected to order page.
    - `Order`
        - Summarize the order.
        - Display a thank you message to the customer.
2. The application content should be operated using Redux and navigation with React Router.
3. A list of products should be dynamically loaded from the `products.json` file.
4. The app should simulate sending order data to a URL by printing its content to the console.
5. Use of bundler of your choice.

# Asset Files

[Frontend](https://www.dropbox.com/sh/trn5cuq0m79vvfy/AADyCiw_rfBl3mKitfjLgf2-a?dl=0)