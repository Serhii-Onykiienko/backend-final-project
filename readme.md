# Clothica — Online Clothing Store

[Українська версія](#clothica--інтернет-магазин-одягу) | [English version](#clothica--online-clothing-store-1)

---

# Clothica — Інтернет-магазин одягу

## Про проєкт

**Clothica** — це full-stack вебзастосунок інтернет-магазину одягу, створений для зручного перегляду товарів, ознайомлення з категоріями, керування обліковим записом та оформлення замовлень.

Проєкт складається з двох частин: frontend та backend, які взаємодіють між собою через REST API.

Backend забезпечує основну бізнес-логіку застосунку: автентифікацію та авторизацію користувачів, керування товарами й категоріями, обробку замовлень, відгуки та email-підписки.

**Мета проєкту** — створити зручну та функціональну платформу для онлайн-покупок із надійною серверною частиною.

## Репозиторії проєкту

- **Backend:** [backend-final-project](https://github.com/Serhii-Onykiienko/backend-final-project)
- **Frontend:** [project-closette-front](https://github.com/konorezzova-spec/project-closette-front)

## Основні технології

Backend розроблений з використанням таких технологій:

- **Node.js** — середовище виконання JavaScript.
- **Express.js 5** — фреймворк для створення REST API.
- **MongoDB** — NoSQL база даних.
- **Mongoose** — ODM для роботи з MongoDB.
- **JWT (JSON Web Token)** — автентифікація та авторизація користувачів.
- **bcrypt** — хешування паролів.
- **Nodemailer** — надсилання електронних листів.
- **Swagger / OpenAPI** — документація API.
- **Celebrate** — валідація запитів.
- **Helmet** — додатковий захист HTTP-заголовків.
- **CORS** — налаштування міждоменних запитів.
- **Pino** — логування HTTP-запитів.
- **Cookie-parser** — обробка cookies.

## Основний функціонал

- Реєстрація та авторизація користувачів.
- Керування обліковим записом користувача.
- Перегляд товарів і категорій.
- Керування товарами.
- Оформлення та керування замовленнями.
- Робота з відгуками.
- Email-підписки.
- Документація API через Swagger.

## Демо та документація

Backend розгорнутий на платформі Render:

- **[Clothica Backend — Live Server](https://backend-final-project-acec.onrender.com/)**
- **[API Documentation — Swagger UI](https://backend-final-project-acec.onrender.com/api-docs)**

## Як запустити проєкт локально

### Необхідні інструменти

Перед запуском переконайтеся, що у вас встановлені:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB (локально або MongoDB Atlas)

### Встановлення

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/Serhii-Onykiienko/backend-final-project.git
   ```

2. Перейдіть до директорії проєкту:

   ```bash
   cd backend-final-project
   ```

3. Встановіть залежності:

   ```bash
   npm install
   ```

4. Створіть файл `.env` у кореневій директорії проєкту та додайте необхідні змінні середовища.

5. Запустіть сервер у режимі розробки:

   ```bash
   npm run dev
   ```

   Або запустіть сервер у звичайному режимі:

   ```bash
   npm start
   ```

Сервер працюватиме на порту, вказаному у змінній `PORT`.

## Змінні середовища

Для роботи проєкту необхідно налаштувати такі змінні у файлі `.env`:

| Змінна          | Опис                         |
| --------------- | ---------------------------- |
| `PORT`          | Порт сервера                 |
| `NODE_ENV`      | Середовище виконання         |
| `MONGO_URL`     | Рядок підключення до MongoDB |
| `SMTP_HOST`     | SMTP-сервер                  |
| `SMTP_PORT`     | Порт SMTP-сервера            |
| `SMTP_USER`     | Ім'я користувача SMTP        |
| `SMTP_PASSWORD` | Пароль SMTP                  |
| `SMTP_FROM`     | Email відправника            |
| `JWT_SECRET`    | Секретний ключ JWT           |
| `FRONTEND_URL`  | URL frontend-застосунку      |

**Важливо:** файл `.env` містить конфіденційні дані. Не додавайте його до Git-репозиторію та не публікуйте секретні ключі.

## Розгортання (Deployment)

Backend розгорнутий за допомогою [Render](https://render.com/).

Для розгортання власної версії:

1. Створіть Web Service на Render.
2. Підключіть GitHub-репозиторій.
3. Вкажіть команду збірки:

   ```bash
   npm install
   ```

4. Вкажіть команду запуску:

   ```bash
   npm start
   ```

5. Додайте необхідні змінні середовища в налаштуваннях Render.
6. Запустіть Deployment.

## Документація API

Документація API доступна через Swagger UI за адресою:

`/api-docs`

Swagger дозволяє переглядати доступні API-ендпоінти, їхні параметри та тестувати запити.

## Ліцензія

Проєкт розроблений з навчальною метою в межах командного фінального проєкту.

---

# Clothica — Online Clothing Store

## About the Project

**Clothica** is a full-stack e-commerce web application designed to provide customers with a convenient way to browse clothing products, explore categories, manage their accounts, and place orders.

The project consists of two parts: frontend and backend, which communicate through a REST API.

The backend provides the core business logic of the application, including user authentication and authorization, product and category management, order processing, customer reviews, and email subscriptions.

**Project goal:** to create a convenient and functional online shopping platform with a reliable backend architecture.

## Project Repositories

- **Backend:** [backend-final-project](https://github.com/Serhii-Onykiienko/backend-final-project)
- **Frontend:** [project-closette-front](https://github.com/konorezzova-spec/project-closette-front)

## Technologies

The backend is built using the following technologies:

- **Node.js** — JavaScript runtime environment.
- **Express.js 5** — framework for building REST APIs.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.
- **JWT (JSON Web Token)** — user authentication and authorization.
- **bcrypt** — password hashing.
- **Nodemailer** — email communication.
- **Swagger / OpenAPI** — API documentation.
- **Celebrate** — request validation.
- **Helmet** — HTTP security headers.
- **CORS** — cross-origin resource sharing.
- **Pino** — HTTP request logging.
- **Cookie-parser** — cookie parsing middleware.

## Main Features

- User registration and authentication.
- User account management.
- Product and category browsing.
- Product management.
- Order placement and management.
- Customer reviews.
- Email subscriptions.
- API documentation with Swagger.

## Live Demo & Documentation

The backend is deployed on Render:

- **[Clothica Backend — Live Server](https://backend-final-project-acec.onrender.com/)**
- **[API Documentation — Swagger UI](https://backend-final-project-acec.onrender.com/api-docs)**

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB (locally or MongoDB Atlas)

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

   Or start the server in production mode:

   ```bash
   npm start
   ```

The server will run on the port specified in the `PORT` environment variable.

## Environment Variables

The following environment variables are required:

| Variable        | Description               |
| --------------- | ------------------------- |
| `PORT`          | Server port               |
| `NODE_ENV`      | Application environment   |
| `MONGO_URL`     | MongoDB connection string |
| `SMTP_HOST`     | SMTP server host          |
| `SMTP_PORT`     | SMTP server port          |
| `SMTP_USER`     | SMTP username             |
| `SMTP_PASSWORD` | SMTP password             |
| `SMTP_FROM`     | Sender email address      |
| `JWT_SECRET`    | JWT secret key            |
| `FRONTEND_URL`  | Frontend application URL  |

**Important:** The `.env` file contains sensitive information. Never commit it to the Git repository or expose secret credentials.

## Deployment

The backend is deployed using [Render](https://render.com/).

To deploy your own instance:

1. Create a new Web Service on Render.
2. Connect your GitHub repository.
3. Set the build command:

   ```bash
   npm install
   ```

4. Set the start command:

   ```bash
   npm start
   ```

5. Add the required environment variables in the Render dashboard.
6. Deploy the application.

## API Documentation

The API documentation is available through Swagger UI at:

`/api-docs`

Swagger provides an overview of available API endpoints, their parameters, and allows developers to test API requests.

## License

This project was developed for educational purposes as a team final project.
