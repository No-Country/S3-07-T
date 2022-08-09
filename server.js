import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
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

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3001", // <-- location of the react app were connecting to
    credentials: true,
  })
);

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
// app.listen(PORT, () => {
//   console.log("Server Has Started");
// });

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

/////////////////////
app.use(morgan("tiny"));

// app.use('/api', routes);
app.use("/api", routesAuth);
app.use("/api", routesRoles);
