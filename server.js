import express from "express";
//environment
import dotenv from "dotenv";
//middlewares
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
//connection
import connection from "./connection";
// const routes = require('./api');
// routes
import routesAuth from "./Routes/routesAuth";
import routesRoles from "./Routes/routesRoles";

//----------------------------------------- END OF IMPORTS---------------------------------------------------
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3001; // Step 1

connection();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: `http://localhost:${PORT}`, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(morgan("tiny"));

//----------------------------------------- ROUTES ------------------------------------------------------///
// app.use('/api', routes);
app.use("/api", routesAuth);
app.use("/api", routesRoles);
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
// app.listen(PORT, () => {
//   console.log("Server Has Started");
// });

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
