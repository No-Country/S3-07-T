import express from 'express'
//environment
import dotenv from 'dotenv'
//middlewares
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
//connection
import connection from './connection'
//routes
import routesAuth from './routes/routesAuth'
import routesUser from './routes/routesUser'
import routesRoles from './routes/routesRoles'
import routesTech from './routes/routesTechnology'
import routesTeam from './routes/routesTeam'
import routesPublication from './routes/routesPublication'
//import routesProject from './routes/routesProject'
import routesComment from './routes/routesComment'

const app = express()

//Environment variables
dotenv.config()

const FRONTEND_PORT = process.env.FRONTEND_PORT ?? 3000

//Connection to DataBase
connection()

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: `http://localhost:${FRONTEND_PORT}`, // <-- location of the react app were connecting to
    credentials: true,
  }),
)
app.use(morgan('tiny'))

//Routes

app.use('/api', routesAuth)
app.use('/api', routesRoles)
app.use('/api', routesTech)
app.use('/api', routesTeam)
app.use('/api', routesPublication)
//app.use('/api', routesProject)
app.use('/api', routesUser)
app.use('/api', routesComment)

export default app