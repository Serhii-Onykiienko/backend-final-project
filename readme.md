# Clothica — Online Clothing Store

**Clothica** is a full-stack e-commerce project designed to provide customers with a convenient way to browse clothing products, explore categories, manage their accounts, and place orders.

## About the Project

Clothica is an online clothing store developed to simplify the online shopping experience.

The application consists of two parts: frontend and backend, which communicate through a REST API.

The backend provides the core functionality of the application, including user authentication, product management, category browsing, order processing, customer feedback, and email subscriptions.

The main goal is to create a convenient and reliable shopping experience with a structured and secure application architecture.

## Related Repositories

- **Backend:** [backend-final-project](https://github.com/Serhii-Onykiienko/backend-final-project)
- **Frontend:** [project-closette-front](https://github.com/konorezzova-spec/project-closette-front)

## Technologies

The backend is built using the following technologies:

- **Node.js** — JavaScript runtime environment.
- **Express.js 5** — backend framework for building REST APIs.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.
- **JWT (JSON Web Token)** — user authentication and authorization.
- **bcrypt** — password hashing.
- **Nodemailer** — email notifications and communication.
- **Cloudinary** — cloud-based image management.
- **Swagger / OpenAPI** — API documentation.
- **Celebrate** — request validation.
- **Helmet** — HTTP security headers.
- **CORS** — cross-origin resource sharing.
- **Pino** — HTTP request logging.

## Main Features

- User registration, login, and authentication.
- User account management.
- Product and category management.
- Product browsing.
- Order management.
- Customer feedback.
- Email subscriptions.
- API documentation with Swagger.

## Live Demo

The backend is deployed on Render:

**[Clothica Backend — Live Server](https://backend-final-project-acec.onrender.com/)**

**[API Documentation — Swagger](https://backend-final-project-acec.onrender.com/api-docs)**

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB database (local or MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Serhii-Onykiienko/backend-final-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-final-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the required environment variables.

5. Start the development server:

   ```bash
   npm run dev
   ```

   Or start the production server:

   ```bash
   npm start
   ```

The server will start on the port specified in the `.env` file (default: `4000`).

## Environment Variables

The project requires the following environment variables:

| Variable                | Description               |
| ----------------------- | ------------------------- |
| `PORT`                  | Server port               |
| `NODE_ENV`              | Application environment   |
| `MONGO_URL`             | MongoDB connection string |
| `SMTP_HOST`             | SMTP server host          |
| `SMTP_PORT`             | SMTP server port          |
| `SMTP_USER`             | SMTP username             |
| `SMTP_PASSWORD`         | SMTP password             |
| `SMTP_FROM`             | Sender email address      |
| `JWT_SECRET`            | Secret key for JWT        |
| `FRONTEND_URL`          | Frontend application URL  |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name     |
| `CLOUDINARY_API_KEY`    | Cloudinary API key        |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret     |

**Note:** Never commit your `.env` file or expose sensitive credentials in the repository.

## Deployment

The backend is deployed using [Render](https://render.com/).

To deploy your own instance:

1. Create a new Web Service on Render.
2. Connect your GitHub repository.
3. Set the build command to `npm install`.
4. Set the start command to `npm start`.
5. Add all required environment variables in the Render dashboard.
6. Deploy the application.

## API Documentation

The API documentation is available through Swagger UI:

`/api-docs`

It provides an overview of available endpoints and allows developers to explore and test API requests.

## Project Structure

```text
backend-final-project/
├── src/
│   ├── db/
│   ├── middlewares/
│   ├── routes/
│   ├── ...
│   └── server.js
├── swagger/
│   └── openapi.yaml
├── .env.example
├── package.json
└── README.md
```

## License

This project is developed for educational purposes as a final team project.
