# Legit Store

Legit Store is a React-based e-commerce application that allows users to browse and purchase products. It features a login system, product filtering and search, a shopping cart, and a product detail page.

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/legit-store.git
```

2. Navigate to the project directory:
```
cd legit-store
```

3. Install the dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. **Login**: Users can log in to the application using the demo credentials: `username: johnd`, `password: m38rmF$`.

2. **Browse Products**: On the home page, users can browse and filter products by category and search for specific products.

3. **View Product Details**: Clicking on a product will take the user to the product detail page, where they can see more information about the product and add it to the cart.

4. **Add to Cart**: Users can add products to their cart by clicking the "Add to Cart" button on the product card or the product detail page.

5. **View Cart**: Users can view the contents of their cart by clicking the "Cart" link in the header. They can update the quantity or remove items from the cart.

6. **Checkout**: Users can complete their order by clicking the "Checkout" button in the cart. This will clear the cart and display a confirmation message.

7. **Logout**: Users can log out of the application by clicking the "Logout" button in the header.

## API

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The following API endpoints are used:

- `GET /products`: Fetch all products
- `GET /products/categories`: Fetch all product categories
- `GET /products/category/{category}`: Fetch products by category
- `GET /products/{id}`: Fetch a specific product
- `POST /auth/login`: Authenticate a user

## Testing

The application does not currently have any automated tests. However, you can manually test the following scenarios:

1. Login with valid and invalid credentials
2. Browse products, filter by category, and search for products
3. View product details and add items to the cart
4. Update the quantity and remove items from the cart
5. Complete an order and view the order confirmation
