import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from './routes/MyUserRoute'
const port = process.env.PORT || 7000
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log('Connected to the database!'))

const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: 'Health OK!' })
})

app.use('/api/my/user', myUserRoute);

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`)
})