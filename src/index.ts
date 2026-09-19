import express from 'express';
import cors from 'cors';
import { type Request, type Response } from 'express';
import subjectsRouter from './routes/subjects'

const app = express();
const PORT = 3000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))
app.use('/api/subjects', subjectsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, ХУЙ!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});