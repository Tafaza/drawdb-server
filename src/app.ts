import express from 'express';
import cors from 'cors';
import { emailRouter } from './routes/email-route';
import { gistRouter } from './routes/gist-route';
import { config } from './config';

const app = express();

app.use(
  cors({
    origin: config.dev
      ? '*'
      : (origin, callback) => {
          const normalizedOrigin = origin?.trim().replace(/\/$/, '');
          if (normalizedOrigin && config.server.allowedOrigins.includes(normalizedOrigin)) {
            callback(null, true);
            return;
          }
          callback(null, false);
        },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  }),
);

app.use(express.json({ limit: config.server.maxBodySize }));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/email', emailRouter);
app.use('/gists', gistRouter);

export default app;
