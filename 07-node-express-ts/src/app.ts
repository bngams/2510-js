import express from 'express';
import itemRoutes from './routes/itemRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import bodyParser from 'body-parser';
import cors from 'cors'; // npm install @types/cors

const app = express();

// middleware to parse JSON
app.use(express.json());
app.use(cors()); // Enable CORS for all routes: TODO: configure as needed allow only specific origins / methods / headers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;