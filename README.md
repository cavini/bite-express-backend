# Bite Express - Backend

Welcome to the **Bite Express** backend repository! This backend service is built to support the Bite Express frontend application, providing robust and secure functionalities for managing restaurant data, handling orders, and processing payments.

## 🌟 Features

### Core Functionality:
- 🛠️ **Node.js & Express**: Fast, unopinionated, minimalist web framework for Node.js.
- 📦 **MongoDB & Mongoose**: NoSQL database and object data modeling (ODM) library for MongoDB and Node.js.
- 🌐 **CORS**: Cross-Origin Resource Sharing enabled for secure and flexible client-server communication.
- 🔑 **JWT Authentication**: Middleware to validate JWT tokens ensuring secure access to API endpoints.
- ☁️ **Cloudinary Integration**: For managing and storing restaurant and menu item images.
- 📂 **Multer**: Middleware for handling multipart/form-data, used for file uploads.
- 💳 **Stripe Integration**: Handles payment processing and uses webhooks for real-time order status updates.
- 🔄 **Webhooks**: Utilized to validate and manage Stripe events, including order completions.

## 🛠️ Tech Stack

- 🟢 **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- ⚙️ **Express**: Web application framework for Node.js, designed for building APIs.
- 🍃 **MongoDB**: NoSQL database for storing and managing data.
- 📜 **Mongoose**: Elegant MongoDB object modeling for Node.js.
- 🌐 **CORS**: Middleware for enabling CORS with various options.
- 🔑 **JWT**: Secure token-based authentication mechanism.
- ☁️ **Cloudinary**: Cloud-based image and video management services.
- 📂 **Multer**: Middleware for handling file uploads.
- 💳 **Stripe**: Payment processing platform.
- 🔄 **Webhooks**: For real-time updates and event-driven communication.
- 🟦 **TypeScript**: Strongly typed programming language for enhanced development experience.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (LTS version)
- npm or yarn
- MongoDB (local or cloud-based)
- Stripe CLI (for testing Stripe webhooks) [Install the Stripe CLI](https://stripe.com/docs/stripe-cli#install)

### Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:cavini/bite-express-backend.git
   ```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```
3. **Set up environment variables:**

Create a .env file in the root directory of the backend repo.
Add the following environment variables:
```bash
MONGODB_CONNECTION_STRING=<Your MongoDB Connection String>
AUTH0_AUDIENCE=<Your Auth0 Audience>
AUTH0_ISSUER_BASE_URL=<Your Auth0 Issuer Base URL>

PORT=7000

CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>

STRIPE_API_KEY=<Your Stripe API Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>

FRONTEND_URL=http://localhost:5173
```

Note: You'll need to set up free accounts on MongoDB, Auth0, Cloudinary, and Stripe to get the necessary credentials.

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Test Stripe webhooks:**
Use the Stripe CLI to forward webhook events to your local server. Run the following command:
```bash
stripe listen --forward-to localhost:7000/api/order/checkout/webhook
```

