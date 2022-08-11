import express from "express";
//environment
import dotenv from "dotenv";
//middlewares
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
//connection
import connection from "./connection";
//routes
import routesAuth from "./routes/routesAuth";
import routesRoles from "./routes/routesRoles";
import routesTech from "./routes/technology.route";
import routesTeam from "./routes/team.route";
import routesPublication from "./routes/publication.route";

const app = express();

//Environment variables
dotenv.config();

const FRONTEND_PORT = process.env.FRONTEND_PORT ?? 3000;

//Connection to DataBase
connection();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: `http://localhost:${FRONTEND_PORT}`, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(morgan("tiny"));

//Routes
app.use("/api", routesAuth);
app.use("/api", routesRoles);
app.use("/api", routesTech);
app.use("/api", routesTeam);
app.use("/api", routesPublication);

module.exports = app;
