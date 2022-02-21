<h1 align="center">
  💭 Reckonface
</h1>

## A simple app to detect faces in pictures

#### Important Note: This is an app made for studying purposes

<div style="color:#333333">

### 😶 Why bother creating this?

This project was made for studying purposes. The objective is to practice the development of a complete app with react in front-end, nodejs (with express) in the backend, a third party API usage and a simple relational database. The third party API is used for the face recognition (Clarifai API). The Database is Postgres

### 🖥 How do these stuff work?

To use the application, the user must register/signin in the applicaiton. After that, all the user has to do is paste a link to an image and submit the link. After that, the link will be sent to Clarifai API to detect if there are faces in the picture. In case positive, a box will be draw in every face and the counter of all entries for the user will be increased.

### 🚜 What is under the hood?

It is a very simple project with not so manny libraries or whatever. The main stuff:

- [NodeJS](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Clarifai API](https://docs.clarifai.com/)
- [Clarifai Lib](https://www.npmjs.com/package/clarifai)

#### General

- [NPM](https://www.npmjs.com/)
- [Clarifai account](https://portal.clarifai.com/signup)

### 🎛 So... How to set up the environment?

In the same repo there are the `webapp` and the `api`. The `webapp` is the front-end part and the `api` is the back-end part. So I'll split the setup in two

#### Front-end (webapp)

- Go to `webapp` directory (`cd webapp`)
- Create a copy of the `.env.example` file, remove the suffix `.example` and fill the data in the file
- Install dependencies (`npm install`)
- Run project (`npm start`)
- Open app in browser (usually the app will be served in port 3000)

> The browser usally opens automatically after the `npm start` command

To summarize the commands:

```bash
# From the root folder of this project

cd webapp
cp .env.example .env # Then fill the file with the information
npm install
npm start

# Then go to the browser at http://localhost:3000 (the port may vary, see the log in terminal)
```

#### Back-end

- First you need to setup a postgres database and the two tables used in the app
- Create a copy of the `.env.example` file, remove the suffix `.example` and fill the data in the file (you can provide either the individual infos for the database or a connection string)
- Install dependencies (`npm install`)
- Run project with nodemon (nodemon is used for hot reloads, `npm run start:dev`)

> The property `FRONT_END_URL` is used for the CORS policy. Make sure to add the frontend url here or the app will not work

To summarize the commands:

```bash
# Setup the database (see below the tables needed)

# From the root folder of this project

cd api
cp .env.example .env # Then fill the file with the information
npm install
npm run satart:dev # To run with nodemon enabled
```

##### Database tables

```psql
CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name character varying(200),
    email text NOT NULL UNIQUE,
    entries integer DEFAULT '0'::bigint,
    joined timestamp without time zone NOT NULL
);

CREATE TABLE logins (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL UNIQUE REFERENCES users(email),
    hash character varying(200) NOT NULL
);
```

</div>
