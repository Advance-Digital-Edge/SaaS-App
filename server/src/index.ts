import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { startDiscordBot } from './services/discord';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT: number | string = process.env.LOCAL_SERVER_PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!.');
});

startDiscordBot(); // Start Discord bot

// Basic route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Server is running smoothly!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});