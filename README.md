# Household Haven - Microservices Restructure

 

Household Haven is an online household products order application that has undergone a transformation from a monolithic Node.js application to a microservices architecture. This restructuring aims to enhance scalability, flexibility, and maintainability by breaking down the application into smaller, independent services.

## Table of Contents
- [Functional Requirements](#functional-requirements)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [License](#license)

## Functional Requirements

- **Listing of Available Products**: Users can browse and search for a wide range of household products available for purchase.
- **User Signup/Sign-in**: Users can create an account or sign in using their credentials to access personalized features and make purchases.
- **Add to Cart**: Users can add products to their shopping cart for future purchase.
- **Add Product to Wishlist**: Users can add products to their wishlist for later consideration or purchase.
- **Place an Order**: Users can place orders for selected products, specifying delivery details and payment information.
- **View Order**: Users can view the status of their orders, including order history and tracking information.

## Technologies Used

- Node.js
- Express.js
- Docker
- Kubernetes
- MongoDB
- RabbitMQ (for asynchronous messaging)
- React.js (for frontend client)

## Project Structure

The application is structured into microservices, each responsible for a specific functionality:

1. **Product Service**: Manages the listing and details of available products.
2. **User Service**: Handles user authentication, signup, and sign-in functionalities.
3. **Cart Service**: Manages the user's shopping cart, including adding and removing products.
4. **Wishlist Service**: Manages the user's wishlist, allowing them to add and remove products for later purchase.
5. **Order Service**: Handles the creation, management, and tracking of user orders.

## Installation

To install and run Household Haven on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/household-haven.git`
2. Install dependencies: `npm install`
3. Set up environment variables (if any)
4. Run the application: `npm start`

## Usage

To use Household Haven, follow these steps:

1. Navigate to the application URL.
2. Sign up for an account or sign in if you already have one.
3. Browse the available products and add them to your cart or wishlist.
4. Proceed to checkout and place your order.
5. View your order status and history.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
