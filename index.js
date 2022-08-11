import dotenv from "dotenv";
import app from "./server";


dotenv.config();

const PORT = process.env.PORT ?? 3001;


app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
