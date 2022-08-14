import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const urlMongo = process.env.DB_URL

const connectToDB = () => {
	mongoose.connect(
		urlMongo || "mongodb://localhost/mern_youtube",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => {
			console.log("Mongoose Is Connected")
		}
	)
}

module.exports = connectToDB
