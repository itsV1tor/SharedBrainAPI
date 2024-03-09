import 'express-async-errors';
import { AppError } from './utils/AppError.js';
import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.js';
import { corsOptions } from '../corsoption.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error: ${error}`,
  });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
