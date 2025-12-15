import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const config = {
  dev: process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development',
  api: {
    github: process.env.GITHUB_TOKEN,
  },
  server: {
    port: process.env.PORT || 5000,
    allowedOrigins: process.env.CLIENT_URLS
      ? process.env.CLIENT_URLS
          .split(',')
          .flatMap((entry) => entry.split(/\s+/))
          .map((origin) => origin.trim().replace(/\/$/, ''))
          .filter(Boolean)
      : [],
    maxBodySize: process.env.MAX_BODY_SIZE || '20mb',
  },
  mail: {
    service: process.env.MAIL_SERVICE || 'gmail',
    username: process.env.MAIL_USERNAME || '',
    password: process.env.MAIL_PASSWORD || '',
  },
};
